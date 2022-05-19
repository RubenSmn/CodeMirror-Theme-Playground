import React, { useEffect, useState } from 'react';
import { tagMap } from '../constants';
import { useSyntaxTheme } from './playground-provider';
import {
  ListItem,
} from '@chakra-ui/react';
import StyleInput from './style-input';

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

  return children ? (
    <ListItem pl={2}>
      <StyleInput text={leaf} style={colorInput} callback={handleChange} />
      { children } 
    </ListItem>
  ) : (
    <ListItem pl={2}>
      <StyleInput text={leaf} style={colorInput} callback={handleChange} />
    </ListItem>
  );
};

export default OptionLeaf;
