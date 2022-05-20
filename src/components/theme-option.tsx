import React from 'react';
import {
  ListItem,
  Text,
  Tooltip,
  HStack,
} from '@chakra-ui/react';
import { editorMap } from '../constants';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { useEditorTheme } from './playground-provider';
import ThemeOptionProp from './theme-option-prop';

interface Props {
  optionName: string
};

const ThemeOption: React.FC<Props> = ({ optionName }) => {
  const { identifier, description, props } = editorMap[optionName];
  const { setEditorTheme } = useEditorTheme();

  const handleChange = (prop: string, value: string) => {
    // update editor with new style
    // if value is a color
    setEditorTheme((prevState: any): any => {
      return {
        ...prevState,
	[identifier]: {
	  ...prevState[identifier],
	  [prop]: value,
	},
      };
    });
  };

  const inputItems = props.map((prop: string, idx: number) => (
    <ThemeOptionProp
      key={`toi-${idx}`}
      identifier={identifier}
      prop={prop}
      callback={handleChange}
    />
  ));

  return (
    <ListItem>
      <HStack justify='space-between'>
	<Text fontWeight='bold'>{ optionName }</Text>
	<Tooltip label={description} placement={'bottom-end'}>
	  <InfoOutlineIcon />
	</Tooltip>
      </HStack>
      <HStack>
	{ inputItems }
      </HStack>
    </ListItem>
  );
};

export default ThemeOption;
