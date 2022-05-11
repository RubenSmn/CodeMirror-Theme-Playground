import React from 'react';
import './App.css';
import ConfigTab from './config-tab';
import Editor from './editor';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1 className="app-header">CodeMirror Theme Playground</h1>
      <div className='app-layout'>
	<Editor />
        <ConfigTab />
      </div>
    </div>
  );
}

export default App;
