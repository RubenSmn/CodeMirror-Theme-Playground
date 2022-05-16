import {
  List,
} from '@chakra-ui/react';
import React from 'react';
import { editorMap } from '../constants';
import ThemeOption from './theme-option';

const ThemeOptions: React.FC = () => {

  const listItems = Object.keys(editorMap).map((optionName: string) => (
    <ThemeOption key={`toi-${optionName}`} optionName={optionName} />
  ));
  
  return (
    <List>
      { listItems }
    </List>
  );
};

export default ThemeOptions;
