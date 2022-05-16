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
import { useSyntaxTheme } from './playground-provider';

const ExportButton: React.FC = () => {
  const [value, setValue] = useState('Wenky')
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { hasCopied, onCopy } = useClipboard(value);
  const { syntaxTheme } = useSyntaxTheme();

  const formatThemeToJs= (toFormat: any, indent: number = 2) => {
    const prefix = new Array(indent + 1).join(' ');
    const prep: { [color: string]: string[] } = Object.entries(toFormat).reduce((acc: any, t: [name: string, value: any]) => {
      const [name, value] = t;
      // if color does not exist add new array
      if (!acc[value.color]) return { ...acc, [value.color]: [name]};
      // if color exists add push name
      return { ...acc, [value.color]: [...acc[value.color], name]};
    }, {});
    const result = Object.entries(prep).map((m: [color: string, tags: string[]]) => {
      const [color, tags] = m;
      const resTags = tags.map((t: string) => `t.${t}`)
      return `${prefix}{ tag: [${resTags.join(', ')}], color: '${color}' }`;
    });
    return `const customTheme = HighlightStyle.define([\n${result.join(', \n')}\n]);`;
  };

  useEffect(() => {
    const theme = formatThemeToJs(syntaxTheme);
    const prefix = `import { tags as t, HighlightStyle } from '@codemirror/highlight';\n\n`;
    const test = prefix.concat(theme);
    setValue(test);
  }, [syntaxTheme]);

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
