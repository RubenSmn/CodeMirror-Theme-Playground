import React from 'react';
import OptionTree from './components/option-tree';
import ThemeOptions from './components/theme-options';
import { tagTree } from './constants';
import {
  Heading,
  Box,
  HStack,
  Tabs,
  TabPanels,
  TabPanel,
  TabList,
  Tab,
} from '@chakra-ui/react';
import ExportButton from './components/export-button';
import ResetButton from './components/reset-button';

const ConfigTab: React.FC = () => {
  return (
    <Box className="app-configtab" minW='360px'>
      <HStack justify='space-between' p={2}>
	<Heading size='md' my={2}>Color Config</Heading>
        <Box pr={1}>
	  <ResetButton />
	  <ExportButton />
	</Box>
      </HStack>
      <Tabs>
        <TabList>
          <Tab>Syntax</Tab>
          <Tab>Editor</Tab>
	</TabList>
        <TabPanels>
          <TabPanel pr={0}>
	    <OptionTree tree={tagTree} />
          </TabPanel>
          <TabPanel maxH={'80vh'} overflowY='scroll'>
	    <ThemeOptions />
	  </TabPanel>
	</TabPanels>
      </Tabs>
    </Box>
  );
};

export default ConfigTab;
