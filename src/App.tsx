import {defaultHighlightStyle} from '@codemirror/highlight';
import React, {useEffect, useState} from 'react';
import './App.css';
import ConfigTab from './config-tab';
import Editor from './editor';

const App: React.FC = () => {
  const [editorTheme, setEditorTheme] = useState([]);

  const handleThemeUpdate = (updatedValues: {}) => {
    setEditorTheme((prevState): any => {
      return [
        ...prevState,
	updatedValues,
      ];
    });
  };

  return (
    <div className="app">
      <h1 className="app-header">CodeMirror Theme Playground</h1>
      <div className='app-layout'>
	<Editor editorTheme={editorTheme} />
        <ConfigTab onChange={handleThemeUpdate} />
      </div>
    </div>
  );
}

export default App;
