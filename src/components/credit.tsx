import React from 'react';
import {
  Text,
  Link,
  HStack,
  StackDivider,
} from '@chakra-ui/react';

const Credit: React.FC = () => {
  return (
    <HStack divider={<StackDivider />}>
      <Text color={'gray.500'}>
	<Link isExternal href={'https://github.com/rubensmn/codemirror-theme-playground'}>
	  Github
	</Link>
      </Text>
      <Text color={"gray.500"}>
	<Link
	  isExternal
	  href={"https://github.com/RubenSmn"}
	  whiteSpace="pre"
	>
	  👋 {"  "}I made this
	</Link>
      </Text>
    </HStack>
  );
};

export default Credit;
