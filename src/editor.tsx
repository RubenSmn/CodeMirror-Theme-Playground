import React, { useEffect } from 'react';
import useCodeMirror, { setTheme } from './use-codemirror';
import { useEditorTheme } from './components/playground-provider';
import {
  Box,
  Heading,
  HStack,
} from '@chakra-ui/react';
import ChangeDocButton from './components/change-doc-button';

const Editor: React.FC = () => {
  const [editorTheme, _] = useEditorTheme();
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>();
  
  useEffect(() => {
    if (!editorView || !editorTheme) return;
    const theme = Object.values(editorTheme);
    setTheme(editorView, theme);
  }, [editorTheme]);

  return (
    <Box>
      <HStack justify='space-between' my={2} px={3}>
	<Heading size='md'>Editor</Heading>
        <ChangeDocButton />
      </HStack>
      <div ref={refContainer}></div>
    </Box>
  );
};

export default Editor;
