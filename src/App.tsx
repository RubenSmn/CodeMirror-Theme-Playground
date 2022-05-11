import React from 'react';
import './App.css';
import Editor from './editor';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1 className="app-header">CodeMirror Theme Playground</h1>
      <Editor />
    </div>
  );
}

export default App;
