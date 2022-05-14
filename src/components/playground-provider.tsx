import React, { useState } from 'react';

interface Props {
  children: React.ReactNode;
};

const PlaygroundContext = React.createContext<any>({});

const PlaygroundProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [editorTheme, setEditorTheme] = useState({});

  return (
    <PlaygroundContext.Provider value={{ editorTheme, setEditorTheme }}>
      { children }
    </PlaygroundContext.Provider>
  );
};

const useEditorTheme = () => {
  const { editorTheme, setEditorTheme } = React.useContext(PlaygroundContext);
  return [editorTheme, setEditorTheme];
};

export { PlaygroundProvider, useEditorTheme };
