import React, { useEffect } from 'react';
import useCodeMirror, { setTheme } from './use-codemirror';
import {
  Box,
  Heading,
  Center,
} from '@chakra-ui/react';

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
    <Box>
      <Center>
	<Heading size='md' my={2}>Editor</Heading>
      </Center>
      <div ref={refContainer}></div>
    </Box>
  );
};

export default Editor;
