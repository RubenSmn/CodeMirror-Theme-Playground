import React, { useState, useEffect } from 'react';
import StyleInput from './style-input';
import { useEditorTheme } from './playground-provider';

interface Props {
  identifier: string;
  prop: string;
  callback: (prop: string, value: string) => void;
};

const ThemeOptionProp: React.FC<Props> = (componentProps) => {
  const { identifier, prop, callback } = componentProps;
  const [colorInput, setColorInput] = useState('');
  const { editorTheme } = useEditorTheme();

  useEffect(() => {
    if (!editorTheme[identifier]) { setColorInput(''); return; }
    if (!editorTheme[identifier][prop]) { setColorInput(''); return; }
    setColorInput(editorTheme[identifier][prop]);
  }, [editorTheme, identifier, prop]);

  return (
    <StyleInput propName={prop} propStyle={colorInput} callback={callback} />
  );
};

export default ThemeOptionProp;
