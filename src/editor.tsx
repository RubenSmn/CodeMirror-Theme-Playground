import React from 'react';
import useCodeMirror from './use-codemirror';

const Editor: React.FC = () => {
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>();

  return (
    <div ref={refContainer}></div>
  );
};

export default Editor;
