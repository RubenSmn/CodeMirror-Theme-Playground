import React, {useEffect, useState} from 'react';
import {
  Box,
  Input,
  Text,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import ColorIndicator from './color-indicator';

interface Props {
  propName: string;
  propStyle: string;
  callback: (prop: string, value: string) => void;
};

const StyleInput: React.FC<Props> = ({ propName, propStyle, callback }) => {
  const [style, setStyle] = useState(propStyle);
  const isColor = (propName === 'color' || propName === 'backgroundColor');
  const colorRegex = /^#(?:[a-f0-9]{3}|[a-f0-9]{6})$|^$/i;

  useEffect(() => {
    setStyle(propStyle);
  }, [propStyle]);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setStyle(value);
    
    if (!colorRegex.test(value)) return;
    callback(propName, value);
  };

  return (
    <Box>
      <Text align='start'>{ propName }</Text>
      <InputGroup>
	<Input
	  placeholder='#ff3'
	  variant='flushed'
	  onChange={handleChange}
	  value={style}
	/>
    { isColor && <InputRightElement children={<ColorIndicator color={propStyle} />} /> }
      </InputGroup>
    </Box>
  );
};

export default StyleInput;
