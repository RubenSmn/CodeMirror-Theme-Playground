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

  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (_: any, value: any) => {
      if (typeof value === "object" && value !== null) {
	if (seen.has(value)) {
	  return;
	}
	seen.add(value);
      }
      return value;
    };
  };
  
  const formatToJs = (value: any) => {
    return JSON.stringify(value, getCircularReplacer(), 2);
  };

  useEffect(() => {
    const theme = formatToJs(editorTheme);
    const prefix = `import { tags as t } from '@codemirror/highlight';\n\n`;
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
