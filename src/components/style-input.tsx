import React from 'react';
import {
  Box,
  Input,
  Text,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import ColorIndicator from './color-indicator';

interface Props {
  text: string;
  style: string;
  callback: (event: any) => void;
};

const StyleInput: React.FC<Props> = ({ text, style, callback }) => {
  return (
    <Box>
      <Text align='start'>{ text }</Text>
      <InputGroup>
	<Input
	  placeholder='#ff3'
	  variant='flushed'
	  onChange={callback}
	  value={style}
	/>
	<InputRightElement children={<ColorIndicator color={style} />} />
      </InputGroup>
    </Box>
  )
};

export default StyleInput;
