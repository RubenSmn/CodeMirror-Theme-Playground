import React, { useState } from 'react';

interface Props {
  children: React.ReactNode;
};

const PlaygroundContext = React.createContext<any>({});

const PlaygroundProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [syntaxTheme, setSyntaxTheme] = useState({});
  const [editorTheme, setEditorTheme] = useState({});
  const [docPreset, setDocPreset] = useState('javascript');

  return (
    <PlaygroundContext.Provider value={{
      syntaxTheme,
      setSyntaxTheme,
      editorTheme,
      setEditorTheme,
      docPreset,
      setDocPreset
    }}>
      { children }
    </PlaygroundContext.Provider>
  );
};

const useSyntaxTheme = () => {
  const { syntaxTheme, setSyntaxTheme } = React.useContext(PlaygroundContext);
  return { syntaxTheme, setSyntaxTheme };
};

const useEditorTheme = () => {
  const { editorTheme, setEditorTheme } = React.useContext(PlaygroundContext);
  return { editorTheme, setEditorTheme };
};

const useDocPreset = () => {
  const { docPreset, setDocPreset } = React.useContext(PlaygroundContext);
  return { docPreset, setDocPreset };
}

export { PlaygroundProvider, useSyntaxTheme, useEditorTheme, useDocPreset };
