import React from 'react';
import './App.css';
import { useEditorTheme } from './components/theme-provider';
import ConfigTab from './config-tab';
import Editor from './editor';

const App: React.FC = () => {
  const [editorTheme, _] = useEditorTheme();

  return (
    <div className="app">
      <h1 className="app-header">CodeMirror Theme Playground</h1>
      <div className='app-layout'>
	<Editor editorTheme={editorTheme} />
        <ConfigTab />
      </div>
    </div>
  );
}

export default App;
