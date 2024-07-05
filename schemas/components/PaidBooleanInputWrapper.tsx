// components/PaidBooleanInputWrapper.tsx
import React from 'react';
import { useFormValue } from 'sanity';
import PaidBooleanInput from './PaidBooleanInput';

const PaidBooleanInputWrapper: React.FC<any> = (props) => {
  const documentId = useFormValue(['_id']);

  if (!documentId) {
    return null;
  }

  return <PaidBooleanInput {...props} documentId={documentId as string}/>;
};

export default PaidBooleanInputWrapper;
