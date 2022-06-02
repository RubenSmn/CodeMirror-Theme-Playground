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
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import { useEditorTheme, useSyntaxTheme } from './playground-provider';

const ExportButton: React.FC = () => {
  const [syntaxValue, setSyntaxValue] = useState('')
  const [themeValue, setThemeValue] = useState('');
  const [clipboardValue, setClipboardValue] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { hasCopied, onCopy } = useClipboard(clipboardValue);
  const { syntaxTheme } = useSyntaxTheme();
  const { editorTheme } = useEditorTheme();

  const formatSyntaxToJs= (toFormat: any, indent: number = 2) => {
    const prefix = new Array(indent + 1).join(' ');

    const prep: { [prop: string]: string[] } = Object.entries(toFormat)
      .reduce((acc: any, t: [name: string, value: any]) => {
	const [name, value] = t;
	Object.entries(value)
	  .map((prop: [name: string, value: any]) => {
	    const [propName, propValue] = prop;
	    if (propName === 'tag') return null;
	    const finalProp = `${propName}: '${propValue}'`;
	    if (!acc[finalProp]) {
	      acc = { ...acc, [finalProp]: [name] };
	      return null;
	    }
	    acc = { ...acc, [finalProp]: [...acc[finalProp], name] };
	    return null;
	  });
	return acc;
      }, {});

    const result = Object.entries(prep)
      .map((m: [color: string, tags: string[]]) => {
	const [prop, tags] = m;
	const resTags = tags.map((t: string) => `t.${t}`)
	return `${prefix}{ tag: [${resTags.join(', ')}], ${prop} }`;
      });

    return result.join(', \n');
  };
 
  const formatThemeToJs = (toFormat: any, indent: number = 2) => {
    const prefix = new Array(indent + 1).join(' ');

    const result = Object.entries(toFormat).map((style: [name: string, value: any]) => {
      const [name, value] = style;
      const props = Object.entries(value).map((prop: any) => {
	const [propName, propValue] = prop;
	if (!propName || !propValue) return null;
        return `${propName}: '${propValue}'`;
      });
      if (!props.length) return null;
      return `${prefix}'${name}': { ${props.join(', ')} }`;
    });

    return result.join(', \n');
  };

  const handleOpen = () => {
    onOpen();
    setClipboardValue(syntaxValue);
  };

  useEffect(() => {
    const syntax = formatSyntaxToJs(syntaxTheme);
    if (!syntax) return setSyntaxValue('');
    const prefix = `import { tags as t, HighlightStyle } from '@codemirror/highlight';\n\n`;
    const suffix = `const customSyntax = HighlightStyle.define([\n${syntax}\n]);`;
    const result = prefix.concat(suffix);
    setSyntaxValue(result);
  }, [syntaxTheme]);

  useEffect(() => {
    const theme = formatThemeToJs(editorTheme);
    if (!theme) return setThemeValue('');
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
        onClick={handleOpen}
      >Export</Button>

      <Modal isOpen={isOpen} onClose={onClose} size='2xl'>
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
     	    <Tabs>
    	      <TabList>
		<Tab onClick={() => setClipboardValue(syntaxValue)}>Syntax</Tab>
		<Tab onClick={() => setClipboardValue(themeValue)}>Editor</Tab>
	      </TabList>
	      <TabPanels>
		<TabPanel>
		  <Textarea
		    value={!syntaxValue ? 'No syntax customization yet' : syntaxValue}
		    onChange={(e) => setSyntaxValue(e.target.value)}
		    m={2}
		    minH='50vh'
		  />
		</TabPanel>
		<TabPanel>
		  <Textarea
		    value={!themeValue ? 'No editor customization yet' : themeValue}
		    onChange={(e) => setThemeValue(e.target.value)}
		    m={2}
		    minH='50vh'
		  />
		</TabPanel>
	      </TabPanels>
	    </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
};

export default ExportButton;
