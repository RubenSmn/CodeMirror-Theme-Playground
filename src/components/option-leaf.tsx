import React, { useEffect, useState } from 'react';
import { tagMap } from '../constants';
import { useSyntaxTheme } from './playground-provider';
import {
  Input,
  Text,
  ListItem,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import ColorIndicator from './color-indicator';

interface Props {
  leaf: string;
  children?: React.ReactNode;
};

const OptionLeaf: React.FC<Props> = (props) => {
  const { leaf, children } = props;
  const tag = tagMap[leaf];
  const { syntaxTheme, setSyntaxTheme } = useSyntaxTheme();
  const colorRegex = /^#(?:[a-fA-F0-9]{3}|[a-fA-F0-9]{6}$)|^$/;
  const [colorInput, setColorInput] = useState('');

  const handleChange = (event: any) => {
    // update editor with new style
    // if value is a color
    const newValue = event.target.value;
    setColorInput(newValue);

    if (!colorRegex.test(newValue)) return;
    setSyntaxTheme((prevState: any): any => {
      return {
        ...prevState,
	[leaf]: { tag, color: newValue },
      };
    });
  };

  useEffect(() => {
    if (!syntaxTheme[leaf]) { setColorInput(''); return; };
    setColorInput(syntaxTheme[leaf].color);
  }, [syntaxTheme]);

  const InputComponent = (
    <>
      <Text align='start'>{ leaf }</Text>
      <InputGroup>
	<Input
	  placeholder='#ff3'
	  variant='flushed'
	  onChange={(e) => handleChange(e)}
	  value={colorInput}
	/>
        <InputRightElement children={<ColorIndicator color={colorInput} />} />
      </InputGroup>
    </>
  );

  return children ? (
    <ListItem pl={2}>
      { InputComponent }
      { children } 
    </ListItem>
  ) : (
    <ListItem pl={2}>
      { InputComponent } 
    </ListItem>
  );
};

export default OptionLeaf;
