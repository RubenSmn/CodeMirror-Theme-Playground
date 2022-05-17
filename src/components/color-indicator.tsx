import React from 'react';
import {
  Box,
} from '@chakra-ui/react';

interface Props {
  color: string;
};

const ColorIndicator: React.FC<Props> = ({ color }) => {
  return (
    <Box
      p={2}
      borderRadius={9999}
      bg={color}
    ></Box>
  );
};

export default ColorIndicator;
