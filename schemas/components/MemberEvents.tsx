import React, {useEffect, useState} from 'react';
import { useClient } from 'sanity';
import { ClientError } from '@sanity/client';
import { Link } from 'sanity/router';
import { Card, Stack, Text, Heading } from '@sanity/ui';

interface Props {
    documentId: string;
}

interface Event {
    _id: string;
    nom: string;
    dates: {
        date: string;
        members: {
            _id: string;
        }[];
    }[];
}

const MemberEvents: React.FC<Props> = ({documentId}) => {
    const client = useClient({apiVersion: "2022-03-07"});
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {

        if (documentId) {
            const query = `
                *[_type == "event"]{
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

            client.fetch(query).then((data: Event[]) => {
                const memberEvent = data.map(activity => ({
                    ...activity,
                    dates: activity.dates?.filter(date =>
                        date.members?.some(member => member._id === documentId)
                    )
                })).filter(activity => activity.dates && activity.dates.length > 0);

                setEvents(memberEvent);
            })
            .catch((error: ClientError) => {
                console.error('Error fetching events:', error.message)
            })
        }
    }, [documentId, client])

    if (events.length === 0) {
        return (
            <Card padding={4} radius={2} shadow={1}>
                <Stack space={3}>
                    <Text>
                        Aucun événement inscrit
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
                        events?.map(event => (
                            event?.dates?.map(date => (
                                <Link href={`${window.location.protocol}//${window.location.host}/structure/event;${event._id}`} target='_blank'>
                                    <Card key={`${event._id}-${date.date}`} padding={3} radius={2} shadow={1} tone='positive'>
                                        <Text>
                                            <strong>{event.nom}</strong> - {new Date(date.date).toLocaleString()}
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

export default MemberEvents

export type MemberEventsType = typeof MemberEvents