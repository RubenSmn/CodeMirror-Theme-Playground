import React from 'react';
import './App.css';
import ConfigTab from './config-tab';
import Editor from './editor';
import Credit from './components/credit';
import {
  Center,
  Heading,
  HStack
} from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <div className="app">
      <HStack my={3} justify='space-evenly'>
        <Heading size='lg'>CodeMirror Theme Playground</Heading>
        <Credit />
      </HStack>
      <div className='app-layout'>
	<Editor />
        <ConfigTab />
      </div>
    </div>
  );
}

export default App;
