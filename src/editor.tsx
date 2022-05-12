import React, { useEffect } from 'react';
import useCodeMirror, { setTheme } from './use-codemirror';
import { useEditorTheme } from './components/theme-provider';
import {
  Box,
  Heading,
  Center,
} from '@chakra-ui/react';

const Editor: React.FC = () => {
  const [editorTheme, _] = useEditorTheme();
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>();
  
  useEffect(() => {
    if (!editorView || !editorTheme) return;
    setTheme(editorView, editorTheme);
  }, [editorTheme]);

  return (
    <Box>
      <Center>
	<Heading size='md' my={2}>Editor</Heading>
      </Center>
      <div ref={refContainer}></div>
    </Box>
  );
};

export default Editor;
