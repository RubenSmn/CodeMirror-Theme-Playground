import React, {useEffect, useState} from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Textarea,
  useDisclosure,
  useClipboard,
} from '@chakra-ui/react';
import { useEditorTheme } from './theme-provider';

const ExportButton: React.FC = () => {
  const [value, setValue] = useState('Wenky')
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { hasCopied, onCopy } = useClipboard(value);
  const [editorTheme, _] = useEditorTheme();

  const formatToJs = (toFormat: any, indent: number) => {
    const prefix = new Array(indent + 1).join(' ');
    const result = Object.entries(toFormat).map((tag: any) => {
      const [name, value] = tag;
      const values = Object.entries(value)
      .filter((v: any) => v[0] !== 'tag')
      .map((v: any) => {
	return `${v[0]}: '${v[1]}'`;
      }).join(',');
      const res = `${prefix}{ t.${name}, ${values} }`;
      return res;
    });
    return `const customTheme = HighlightStyle.define([\n${result.join(', \n')}\n])`;
  };

  useEffect(() => {
    const theme = formatToJs(editorTheme, 2);
    const prefix = `import { tags as t, HighlightStyle } from '@codemirror/highlight';\n\n`;
    const test = prefix.concat(theme);
    setValue(test);
  }, [editorTheme]);

  return (
    <>
      <Button
	colorScheme='yellow'
	variant='outline'
	size='sm'
        onClick={onOpen}
      >Export</Button>

      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Export your Theme</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Button
	      onClick={onCopy}
	      mx={2}
	    >
	      { hasCopied ? 'Copied' : 'Copy to clipboard'}
	    </Button>
       	    <Textarea
	      value={value}
    	      onChange={(e) => setValue(e.target.value)}
	      m={2}
	      minH='50vh'
	    />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
};

export default ExportButton;
