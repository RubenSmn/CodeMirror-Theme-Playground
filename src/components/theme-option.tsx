import React from 'react';
import {
  ListItem,
  Text,
  Input,
  Tooltip,
  HStack,
} from '@chakra-ui/react';
import { editorMap } from '../constants';
import { InfoOutlineIcon } from '@chakra-ui/icons';

interface Props {
  optionName: string
};

const ThemeOption: React.FC<Props> = ({ optionName }) => {
  const option = editorMap[optionName];

  return (
    <ListItem>
      <HStack justify='space-between'>
	<Text>{ optionName }</Text>
	<Tooltip label={option.description} placement={'bottom-end'}>
	  <InfoOutlineIcon />
	</Tooltip>
      </HStack>
      <Input
	placeholder='#ff3'
	variant='flushed'
      />
    </ListItem>
  );
};

export default ThemeOption;
