import React, {useEffect, useState} from 'react';
import {
  Box,
  Input,
  Text,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import ColorIndicator from './color-indicator';
import {propPlaceholder, propRules} from '../constants';

interface Props {
  propName: string;
  propStyle: string;
  callback: (prop: string, value: string) => void;
};

const StyleInput: React.FC<Props> = ({ propName, propStyle, callback }) => {
  const [style, setStyle] = useState(propStyle);
  const isColor = (
    propName === 'color' ||
    propName === 'backgroundColor' ||
    propName === 'caretColor'
  );

  useEffect(() => {
    setStyle(propStyle);
  }, [propStyle]);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setStyle(value);
    
    if (!propRules[propName].test(value)) return;
    callback(propName, value);
  };

  return (
    <Box>
      <Text align='start'>{ propName }</Text>
      <InputGroup>
	<Input
	  placeholder={propPlaceholder[propName]}
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
