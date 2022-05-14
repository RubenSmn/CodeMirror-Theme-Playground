import React, { useState } from 'react';

interface Props {
  children: React.ReactNode;
};

const PlaygroundContext = React.createContext<any>({});

const PlaygroundProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [editorTheme, setEditorTheme] = useState({});
  const [docPreset, setDocPreset] = useState('javascript');

  return (
    <PlaygroundContext.Provider value={{ editorTheme, setEditorTheme, docPreset, setDocPreset }}>
      { children }
    </PlaygroundContext.Provider>
  );
};

const useEditorTheme = () => {
  const { editorTheme, setEditorTheme } = React.useContext(PlaygroundContext);
  return [editorTheme, setEditorTheme];
};

const useDocPreset = () => {
  const { docPreset, setDocPreset } = React.useContext(PlaygroundContext);
  return [ docPreset, setDocPreset ];
}

export { PlaygroundProvider, useEditorTheme, useDocPreset };
