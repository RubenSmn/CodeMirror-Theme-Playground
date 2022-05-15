import React from 'react';
import { Select } from '@chakra-ui/react';
import { useDocPreset } from './playground-provider';
import { docs as presetDocs } from '../sample-docs';

const ChangeDocButton: React.FC = () => {
  const [docPreset, setDocPreset] = useDocPreset();
  const docs = Object.keys(presetDocs);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setDocPreset(value);
  };

  const options = docs.map((doc: string, idx: number) => {
    const label = doc.charAt(0).toUpperCase() + doc.slice(1);
    return <option value={doc} key={`sdo-${idx}`}>{ label }</option>
  });

  return (
    <Select
      value={docPreset}
      maxWidth={'200px'}
      size='sm'
      variant='flushed'
      onChange={(e) => handleChange(e)}
    >
      { options }
    </Select>
  )
};

export default ChangeDocButton;
