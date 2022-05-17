
import React from 'react';
import {
  Button,
} from '@chakra-ui/react';
import { useEditorTheme, useSyntaxTheme } from './playground-provider';

const ResetButton: React.FC = () => {
  const { setSyntaxTheme } = useSyntaxTheme();
  const { setEditorTheme } = useEditorTheme();

  const handleClick = () => {
    setSyntaxTheme({});
    setEditorTheme({});
  };

  return (
    <Button
      colorScheme='yellow'
      variant='ghost'
      size='sm'
      onClick={handleClick}
    >Reset all</Button>
  )
};

export default ResetButton;
