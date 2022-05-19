import React from 'react';
import { syntaxMap, tagMap } from '../constants';
import { useSyntaxTheme } from './playground-provider';
import {
  HStack,
  Text,
  Tooltip,
  ListItem,
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import SyntaxOptionProp from './syntax-option-prop';

interface Props {
  leaf: string;
  children?: React.ReactNode;
};

const OptionLeaf: React.FC<Props> = (componentProps) => {
  const { leaf, children } = componentProps;
  const tag = tagMap[leaf];
  const { description, props } = syntaxMap[leaf];
  const { setSyntaxTheme } = useSyntaxTheme();

  const handleChange = (prop: string, value: string) => {
    // update editor with new style
    // if value is a color
    setSyntaxTheme((prevState: any): any => {
      return {
        ...prevState,
	[leaf]: {
	  ...prevState[leaf],
	  tag,
	  [prop]: value,
	},
      };
    });
  };

  const inputItems = props.map((prop: string, idx: number) => (
    <SyntaxOptionProp
      key={`soi-${idx}`}
      identifier={leaf}
      prop={prop}
      callback={handleChange}
    />
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
