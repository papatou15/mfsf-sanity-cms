import React, {useState, useEffect} from 'react'
import { useClient } from 'sanity'
import { Checkbox, Box, Text, Stack, Card } from '@sanity/ui'

interface PaidBooleanInputProps {
    value: boolean;
    onChange: (event: {type: 'set'; value: boolean}) => void
    documentId: string;
}

const PaidBooleanInput: React.FC<PaidBooleanInputProps> = ({value, onChange, documentId}) => {
    const client = useClient({apiVersion: "2022-03-07"});
    const [isReadOnly, setIsReadOnly] = useState(false);
    const [paidDate, setPaidDate] = useState<Date | null>(null)

    useEffect(() => {
        if(documentId) {
            const query = `*[_id == $id][0]{paidDate}`
            client.fetch(query, { id: documentId }).then((data) => {
                if (data?.paidDate) {
                    const fetchedPaidDate = new Date(data.paidDate);
                    setPaidDate(fetchedPaidDate);
                    const oneYearLater = new Date(fetchedPaidDate);
                    oneYearLater.setFullYear(fetchedPaidDate.getFullYear() + 1);
                    setIsReadOnly(new Date() <= oneYearLater)
                }
            })
        }
    }), [documentId, client]

    const handleCheckboxChange = () => {

        if (value) return;

        if (window.confirm(`Êtes-vous certains de vouloir cocher cette option? \nElle ne sera débarrée que d'ici un an!`)) {
            const currentDate = new Date().toISOString();
            const currentDatePatched = new Date(currentDate);
            const formattedDate = `${String(currentDatePatched.getFullYear())}-${String(currentDatePatched.getMonth() + 1).padStart(2, '0')}-${String(currentDatePatched.getDate()).padStart(2, '0')}`
            client.patch(documentId)
                .set({ "member_form.paidTime": formattedDate, "member_form.paid_check": true })
                .commit()
                .then(() => {
                    onChange({type: 'set', value: true})
                })
                .catch((error) => {
                    console.error("Failed to update the document: ", error)
                })
            value = true
            setIsReadOnly(true)
        }
    }

    return (
        <Card padding={3} radius={2} shadow={1} tone={value ? "positive" : "critical"}>
            <Stack space={3}>
                <Text size={2}>Cotisation payée?</Text>
                <Box paddingY={2}>
                    <Checkbox 
                        checked={value}
                        onChange={handleCheckboxChange}
                        disabled={isReadOnly}
                    />
                    <Box marginTop={4}>
                        <Text size={1}>{value ? "Ce champ se débarrera automatiquement un an après être coché " : ""}</Text>
                    </Box>
                </Box>
            </Stack>
        </Card>
    )
}

export default PaidBooleanInput