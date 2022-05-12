import { Tag } from '@codemirror/highlight';
import React from 'react';
import { tagMap } from '../constants';
import { useEditorTheme } from './theme-provider';
import {
  Input,
  Text,
  ListItem,
} from '@chakra-ui/react';

interface Props {
  leaf: string;
  children?: React.ReactNode;
};

const OptionLeaf: React.FC<Props> = (props) => {
  const { leaf, children } = props;
  const tag = tagMap[leaf];
  const [_, setEditorTheme] = useEditorTheme();
  const colorRegex = /^#[a-fA-F0-9]{3,6}$/;

  const handleChange = (event: any) => {
    // update editor with new style
    // if value is a color
    const newValue = event.target.value;
    if (!colorRegex.test(newValue)) return;
    setEditorTheme((prevState: any): any => {
      return {
        ...prevState,
	[leaf]: { tag, color: newValue },
      };
    });
  };

  const InputComponent = (
    <>
      <Text align='start'>{ leaf }</Text>
      <Input
	placeholder='#ff3'
	variant='flushed'
	onChange={(e) => handleChange(e)}
      />
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
