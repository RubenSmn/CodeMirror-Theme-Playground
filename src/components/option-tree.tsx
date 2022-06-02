import React from 'react';
import OptionLeaf from './option-leaf';
import {
  List,
  Tabs,
  TabList,
	TabPanels,
	TabPanel,
	Tab,
	UnorderedList,
} from '@chakra-ui/react';

interface Props {
  tree: { [index: string]: {} };
  isTrunk?: boolean;
};

const OptionTree: React.FC<Props> = (props) => {
  const { tree, isTrunk = true } = props;

  const leafs = Object.keys(tree).map((leaf: string) => {
    const branch = tree[leaf];
    const hasChildren = Object.keys(branch).length > 0;

    return hasChildren ? (
      <OptionLeaf key={`otl-${leaf}`} leaf={leaf}>
        <OptionTree tree={branch} isTrunk={false} />
      </OptionLeaf>
    ) : (
      <OptionLeaf key={`otl-${leaf}`} leaf={leaf} />
    );
  });

  return isTrunk ? (
    <Tabs orientation='vertical'>
      <TabList>
	{ Object.keys(tree).map((leaf: string) => <Tab key={`tlt-${leaf}`}>{ leaf }</Tab>) }
      </TabList>
      <TabPanels
	maxH={'79vh'}
	overflowY='scroll'
	pr={4}
      >
	{ leafs.map((leaf: any, idx: number) => (
	  <TabPanel key={`tlp-${idx}`} p={0}>
	    <List>
	      { leaf }
	    </List>
	  </TabPanel>
	))}
      </TabPanels>
    </Tabs>
  ) : (
    <UnorderedList>
      { leafs }
    </UnorderedList>
  );
};

export default OptionTree;
