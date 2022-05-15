import React, { useEffect } from 'react';
import useCodeMirror, { setTheme, setDoc } from './use-codemirror';
import { useDocPreset, useEditorTheme } from './components/playground-provider';
import {
  Box,
  Heading,
  HStack,
} from '@chakra-ui/react';
import ChangeDocButton from './components/change-doc-button';

const Editor: React.FC = () => {
  const [editorTheme, setEditorTheme] = useEditorTheme();
  const [docPreset, setDocPreset] = useDocPreset();
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>();
  
  useEffect(() => {
    if (!editorView || !editorTheme) return;
    const theme = Object.values(editorTheme);
    setTheme(editorView, theme);
  }, [editorTheme]);

  useEffect(() => {
    if (!editorView || !docPreset) return;
    setDoc(editorView, docPreset);
  }, [docPreset]);

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
