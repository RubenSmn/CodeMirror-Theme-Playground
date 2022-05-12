import React from 'react';
import './App.css';
import { useEditorTheme } from './components/theme-provider';
import ConfigTab from './config-tab';
import Editor from './editor';
import Credit from './components/credit';
import {
  Center,
  Heading,
  HStack
} from '@chakra-ui/react';

const App: React.FC = () => {
  const [editorTheme, _] = useEditorTheme();

  return (
    <div className="app">
      <HStack my={3} justify='space-evenly'>
        <Heading size='lg'>CodeMirror Theme Playground</Heading>
        <Credit />
      </HStack>
      <div className='app-layout'>
	<Editor editorTheme={editorTheme} />
        <ConfigTab />
      </div>
    </div>
  );
}

export default App;
