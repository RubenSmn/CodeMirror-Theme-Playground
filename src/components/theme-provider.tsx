import React, { useState } from 'react';

interface Props {
  children: React.ReactNode;
};

const EditorThemeContext = React.createContext<any>({});

const EditorThemeProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [editorTheme, setEditorTheme] = useState([]);

  return (
    <EditorThemeContext.Provider value={{ editorTheme, setEditorTheme }}>
      { children }
    </EditorThemeContext.Provider>
  );
};

const useEditorTheme = () => {
  const { editorTheme, setEditorTheme } = React.useContext(EditorThemeContext);
  return [editorTheme, setEditorTheme];
};

export { EditorThemeProvider, useEditorTheme };
