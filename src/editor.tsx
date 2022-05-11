import React, { useEffect } from 'react';
import useCodeMirror, { setTheme } from './use-codemirror';

interface Props {
  editorTheme: any,
};

const Editor: React.FC<Props> = (props) => {
  const { editorTheme } = props;
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>();
  
  useEffect(() => {
    if (!editorView || !editorTheme) return;
    setTheme(editorView, editorTheme);
  }, [editorTheme]);

  return (
    <div ref={refContainer}></div>
  );
};

export default Editor;
