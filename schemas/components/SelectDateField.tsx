import React, { useEffect, useState } from 'react'
import { StringInputProps, useClient, useFormValue, set, unset } from 'sanity'
import { Card, Select, Stack, Text } from '@sanity/ui'

const SelectDateField: React.FC<StringInputProps> = ({ value, onChange, elementProps }) => {
    const client = useClient()
    const [activityDates, setActivityDates] = useState<{ date: string }[]>([])

    const activityRef = useFormValue(['submissions', 0, 'activity', '_ref'])

    useEffect(() => {
        const fetchDates = async () => {
            if (activityRef) {
                try {
                    const activityDoc = await client.fetch(
                        `*[_type == "activity" && _id == $id][0] { dates }`,
                        { id: activityRef[0].activity._ref }
                    )
                    setActivityDates(activityDoc?.dates || [])
                } catch (error) {
                    console.error('Error fetching activity dates:', error)
                }
            }
        }

        fetchDates()
    }, [activityRef, client])

    return (
        <Stack space={3}>
          <Card padding={2} radius={2} shadow={1} tone="transparent">
            <Select
              {...elementProps}
              value={value || ''}
              onChange={(e) => {
                const selectedDate = e.target.value
                onChange(selectedDate ? set(selectedDate) : unset())
              }}
            >
              <option value="">-- Choisir une date --</option>
              {activityDates.map((dateObj, index) => (
                <option key={index} value={dateObj.date}>
                  {new Date(dateObj.date).toLocaleDateString()}
                </option>
              ))}
            </Select>
          </Card>
          {activityDates.length === 0 && (
            <Text size={1} muted>
              Aucune date disponible pour cette activité.
            </Text>
          )}
        </Stack>
      )
}

export default SelectDateField
