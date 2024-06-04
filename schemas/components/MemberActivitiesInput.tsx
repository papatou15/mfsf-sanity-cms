import React from 'react';
import { useFormValue } from 'sanity';
import MemberActivities from './MemberActivities';

const MemberActivitiesInput: React.FC = () => {
  const documentId = useFormValue(['_id']) as string;

  if (!documentId) {
    return null;
  }

  return <MemberActivities value={documentId} />;
};

export default MemberActivitiesInput;
