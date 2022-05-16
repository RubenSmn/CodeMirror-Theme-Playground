import React, { useState, useEffect } from 'react';
import {
  Text,
  Input,
  Box,
} from '@chakra-ui/react';
import { useEditorTheme } from './playground-provider';

interface Props {
  optionName: string;
  identifier: string;
  prop: string;
  callback: (prop: string, value: string) => void;
};

const ThemeOptionProp: React.FC<Props> = (componentProps) => {
  const { optionName, identifier, prop, callback } = componentProps;
  const [colorInput, setColorInput] = useState('');
  const { editorTheme } = useEditorTheme();
  const colorRegex = /^#(?:[a-fA-F0-9]{3}|[a-fA-F0-9]{6}$)|^$/;

  const handleChange = (e: any) => {
    const value = e.target.value;
    setColorInput(value);
    
    if (!colorRegex.test(value)) return;
    callback(prop, value);
  }

  useEffect(() => {
    if (!editorTheme[optionName]) return;
    setColorInput(editorTheme[identifier][prop].color);
  }, [editorTheme]);

  return (
    <Box>
      <Text align='start'>{ prop }</Text>
      <Input
	placeholder='#ff3'
	variant='flushed'
	onChange={handleChange}
	borderColor={colorInput}
	value={colorInput}
      />
    </Box>
  )
};

export default ThemeOptionProp;
