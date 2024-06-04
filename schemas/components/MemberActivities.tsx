import React, {useEffect, useState} from 'react';
import { useClient } from 'sanity';
import { ClientError } from '@sanity/client';
import { Link } from 'sanity/router';
import { Card, Stack, Text, Heading, Box } from '@sanity/ui';

interface Props {
    value: String;
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

const MemberActivities: React.FC<Props> = ({value}) => {
    const client = useClient({apiVersion: "2022-03-07"});
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {

        if (value) {
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
                const memberActivity = data.filter(activity => 
                    activity.dates.some(date =>
                        date.members.some(member => member._id === value)
                    )
                );

                setActivities(memberActivity);
            })
            .catch((error: ClientError) => {
                console.error('Error fetching events:', error.message)
            })
        }
    }, [value, client])

    if (activities.length === 0) {
        return null;
    }
    return (
        <Card padding={4} radius={2} shadow={1}>
            <Stack space={3}>
                <Heading as="h2" size={1}>Inscriptions dans les activitées</Heading>
                <Stack space={2}>
                    {
                        activities?.map(activity => (
                            activity?.dates?.map(date => (
                                <Link href={`${window.location.protocol}//${window.location.host}/structure/activity;${activity._id}`} target='_blank'>
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