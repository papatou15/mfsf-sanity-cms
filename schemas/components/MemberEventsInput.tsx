import React from 'react';
import { useFormValue } from 'sanity';
import MemberEvents from './MemberEvents';

const MemberEventsInput: React.FC = () => {
  const documentId = useFormValue(['_id']) as string;

  if (!documentId) {
    return null;
  }

  return <MemberEvents documentId={documentId} />;
};

export default MemberEventsInput;
