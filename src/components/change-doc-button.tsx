import React from 'react';
import { Select } from '@chakra-ui/react';
import { useDocPreset } from './playground-provider';

const ChangeDocButton: React.FC = () => {
  const [docPreset, setDocPreset] = useDocPreset();

  const handleChange = (e: any) => {
    const value = e.target.value;
    setDocPreset(value);
  };

  return (
    <Select
      value={docPreset}
      maxWidth={'200px'}
      size='sm'
      variant='flushed'
      onChange={(e) => handleChange(e)}
    >
      <option value='javascript'>Javascript</option>
      <option value='markdown'>Markdown</option>
    </Select>
  )
};

export default ChangeDocButton;
