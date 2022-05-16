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
import { useEditorTheme, useSyntaxTheme } from './playground-provider';

const ExportButton: React.FC = () => {
  const [value, setValue] = useState('Wenky')
  const [themeValue, setThemeValue] = useState('No editor customization done');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { hasCopied, onCopy } = useClipboard(themeValue);
  const { syntaxTheme } = useSyntaxTheme();
  const { editorTheme } = useEditorTheme();

  const formatSyntaxToJs= (toFormat: any, indent: number = 2) => {
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
    return `const customSyntax = HighlightStyle.define([\n${result.join(', \n')}\n]);`;
  };
 
  const formatThemeToJs = (toFormat: any, indent: number = 2) => {
    const prefix = new Array(indent + 1).join(' ');
    const result = Object.entries(toFormat).map((style: [name: string, value: any]) => {
      const [name, value] = style;
      const props = Object.entries(value).map((prop: any) => {
	const [propName, propValue] = prop;
	if (!propValue) return;
        return `${propName}: '${propValue}'`;
      });
      if (!props[0]) return;
      return `${prefix}'${name}': { ${props.join(', ')} }`;
    });
    if (!result[0]) return;
    return result.join(', \n');
  };

  useEffect(() => {
    const syntax = formatSyntaxToJs(syntaxTheme);
    const prefix = `import { tags as t, HighlightStyle } from '@codemirror/highlight';\n\n`;
    const result = prefix.concat(syntax);
    setValue(result);
  }, [syntaxTheme]);

  useEffect(() => {
    const theme = formatThemeToJs(editorTheme);
    if (!theme) return;
    const prefix = `import { EditorView } from '@codemirror/view';\n\n`;
    const suffix = `const customTheme = EditorView.theme({\n${theme}\n});`;
    const result = prefix.concat(suffix);
    setThemeValue(result);
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
	      value={themeValue ?? 'No editor customization done'}
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
