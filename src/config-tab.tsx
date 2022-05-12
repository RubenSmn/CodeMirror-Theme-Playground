import React from 'react';
import OptionTree from './components/option-tree';
import { tagTree } from './constants';
import {
  Heading,
  Center,
  Box,
} from '@chakra-ui/react';

const ConfigTab: React.FC = () => {
  return (
    <Box className="app-configtab" minW='360px'>
      <Center>
	<Heading size='md' my={2}>Color Config</Heading>
      </Center>
      <OptionTree tree={tagTree} />
    </Box>
  );
};

export default ConfigTab;
