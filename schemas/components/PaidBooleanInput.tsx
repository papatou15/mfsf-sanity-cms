import React, {useState, useEffect} from 'react'
import { useClient, useFormValue } from 'sanity'
import { Checkbox, Box, Text, Stack, Label, Card } from '@sanity/ui'

interface PaidBooleanInputProps {
    value: boolean;
    onChange: (event: {type: 'set'; value: boolean}) => void
    documentId: string;
    title: string;
}

const PaidBooleanInput: React.FC<PaidBooleanInputProps> = ({value, onChange, documentId, title}) => {
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
                    setIsReadOnly(new Date() < oneYearLater)
                } else {
                    setIsReadOnly(false)
                }
            })
        }
    }), [documentId, client]

    const handleCheckboxChange = () => {
        if (value) return;

        if (window.confirm(`Êtes-vous certains de vouloir cocher cette option? \nElle ne sera débarrée que d'ici un an!`)) {
            const currentDate = new Date().toISOString();
            client.patch(documentId)
                .set({ paidDate: currentDate })
                .commit()
                .then(() => {
                    onChange({ type: 'set', value: true })
                })
        }
    }

    return (
        <Card padding={3} radius={2} shadow={1} tone="positive">
            <Stack space={3}>
                <Label>{title}</Label>
                <Box>
                    <Checkbox 
                        checked={value}
                        onChange={handleCheckboxChange}
                        disabled={isReadOnly}
                    />
                    <Box marginTop={4}>
                        <Text size={1}>{isReadOnly ? "Ce champ se débarrera automatiquement un an après être coché " : ""}</Text>
                    </Box>
                </Box>
            </Stack>
        </Card>
    )
}

export default PaidBooleanInput