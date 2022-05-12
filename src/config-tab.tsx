import React from 'react';
import OptionTree from './components/option-tree';
import { tagTree } from './constants';
import {
  Heading,
  Box,
  HStack,
} from '@chakra-ui/react';
import ExportButton from './components/export-button';

const ConfigTab: React.FC = () => {
  return (
    <Box className="app-configtab" minW='360px'>
      <HStack justify='space-between' p={2}>
	<Heading size='md' my={2}>Color Config</Heading>
        <ExportButton />
      </HStack>
      <OptionTree tree={tagTree} />
    </Box>
  );
};

export default ConfigTab;
