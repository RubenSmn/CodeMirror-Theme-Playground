import React, { useEffect } from 'react';
import useCodeMirror, { setSyntax, setTheme, setDoc } from './use-codemirror';
import { useDocPreset, useSyntaxTheme, useEditorTheme } from './components/playground-provider';
import {
  Box,
  Heading,
  HStack,
} from '@chakra-ui/react';
import ChangeDocButton from './components/change-doc-button';

const Editor: React.FC = () => {
  const { syntaxTheme } = useSyntaxTheme();
  const { editorTheme } = useEditorTheme();
  const { docPreset } = useDocPreset();
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>();
  
  useEffect(() => {
    if (!editorView || !syntaxTheme) return;
    const theme = Object.values(syntaxTheme);
    setSyntax(editorView, theme);
  }, [syntaxTheme]);

  useEffect(() => {
    if (!editorView || !editorTheme) return;
    setTheme(editorView, editorTheme);
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
