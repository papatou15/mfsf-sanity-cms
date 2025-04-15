import React, { useEffect, useState } from 'react';
import { useClient } from 'sanity';
import { ClientError } from '@sanity/client';
import { Link } from 'sanity/router';
import { Card, Stack, Text, Heading, Box } from '@sanity/ui';

interface Props {
    documentId: string;
}

interface Activity {
    _id: string;
    nom: string;
    dates: {
        date: string;
        members: {
            _id: string;
        }[];
    }[];
}

const MemberActivities: React.FC<Props> = ({ documentId }) => {
    const client = useClient({ apiVersion: "2022-03-07" });
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        if (documentId) {
            const query = `
            *[_type == "activity"]{ 
                _id,
                nom, 
                dates[]{
                    date, 
                    "members": members[]->{
                        _id
                    }
                }
            }
          `;

            client.fetch(query).then((data: Activity[]) => {
                const relevant = data.flatMap(activity =>
                    activity.dates?.filter(date =>
                        date.members?.some(member => member._id === documentId)
                    ).map(date => ({
                        activityId: {
                            _type: 'reference',
                            _ref: activity._id
                        },
                        date: date.date
                    })) || []
                );

                client
                    .patch(documentId)
                    .set({ linkedActivities: relevant })
                    .commit()
                    .catch(error => console.error('Failed to patch document:', error));

                setActivities(
                    data.map(activity => ({
                        ...activity,
                        dates: activity.dates?.filter(date =>
                            date.members?.some(member => member._id === documentId)
                        )
                    })).filter(activity => activity.dates && activity.dates.length > 0)
                );
            });
        }
    }, [documentId, client]);

    if (activities.length === 0) {
        return (
            <Card padding={4} radius={2} shadow={1}>
                <Stack space={3}>
                    <Text>
                        Aucune activitée inscrite
                    </Text>
                </Stack>
            </Card>
        );
    }
    return (
        <Card padding={4} radius={2} shadow={1}>
            <Stack space={3}>
                <Heading as="h2" size={1}>Inscriptions dans les activitées</Heading>
                <Stack space={2}>
                    {
                        activities?.map(activity => (
                            activity?.dates?.map((date, index) => (
                                <Link key={index} href={`${window.location.protocol}//${window.location.host}/structure/activitesEtEvenements;activity;${activity._id}`} target='_blank'>
                                    <Card key={`${activity._id}-${date.date}`} padding={3} radius={2} shadow={1} tone='positive'>
                                        <Text>
                                            <strong>{activity.nom}</strong> - {new Date(date.date).toLocaleString()}
                                        </Text>
                                    </Card>
                                </Link>
                            ))
                        ))
                    }
                </Stack>
            </Stack>
        </Card>
    )
}

export default MemberActivities

export type MemberActivitiesType = typeof MemberActivities