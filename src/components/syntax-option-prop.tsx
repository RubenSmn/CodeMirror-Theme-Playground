import React, { useState, useEffect } from 'react';
import StyleInput from './style-input';
import { useSyntaxTheme } from './playground-provider';

interface Props {
  identifier: string;
  prop: string;
  callback: (prop: string, value: string) => void;
};

const SyntaxOptionProp: React.FC<Props> = (componentProps) => {
  const { identifier, prop, callback } = componentProps;
  const [colorInput, setColorInput] = useState('');
  const { syntaxTheme } = useSyntaxTheme();

  useEffect(() => {
    if (!syntaxTheme[identifier]) { setColorInput(''); return; }
    if (!syntaxTheme[identifier][prop]) { setColorInput(''); return; }
    setColorInput(syntaxTheme[identifier][prop]);
  }, [syntaxTheme, identifier, prop]);

  return (
    <StyleInput propName={prop} propStyle={colorInput} callback={callback} />
  );
};

export default SyntaxOptionProp;
