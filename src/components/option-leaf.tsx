import React, { useEffect, useState } from 'react';
import { syntaxMap, tagMap } from '../constants';
import { useSyntaxTheme } from './playground-provider';
import {
  HStack,
  Text,
  Tooltip,
  ListItem,
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import StyleInput from './style-input';

interface Props {
  leaf: string;
  children?: React.ReactNode;
};

const OptionLeaf: React.FC<Props> = (componentProps) => {
  const { leaf, children } = componentProps;
  const tag = tagMap[leaf];
  const { description, props } = syntaxMap[leaf];
  const { syntaxTheme, setSyntaxTheme } = useSyntaxTheme();
  const colorRegex = /^#(?:[a-fA-F0-9]{3}$|[a-fA-F0-9]{6}$)|^$/;
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

  const inputItems = props.map((prop: string, idx: number) => (
    <StyleInput key={`lsi-${idx}`} text={prop} style={colorInput} callback={handleChange} />
  ));

  return (
    <ListItem pl={2}>
      <HStack justify='space-between'>
	<Text fontWeight='bold'>{ leaf }</Text>
	<Tooltip label={description} placement={'bottom-end'}>
	  <InfoOutlineIcon />
	</Tooltip>
      </HStack>
      <HStack>
	{ inputItems }
      </HStack>
      { children && children } 
    </ListItem>
  );
};

export default OptionLeaf;
