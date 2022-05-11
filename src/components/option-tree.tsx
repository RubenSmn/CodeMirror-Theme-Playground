import React from 'react';
import OptionLeaf from './option-leaf';

interface Props {
  tree: { [index: string]: {} };
};

const OptionTree: React.FC<Props> = (props) => {
  const { tree } = props;

  const leafs = Object.keys(tree).map((leaf: string) => {
    const branch = tree[leaf];
    const hasChildren = Object.keys(branch).length > 0;

    return hasChildren ? (
      <OptionLeaf key={`otl-${leaf}`} leaf={leaf}>
        <OptionTree tree={branch} />
      </OptionLeaf>
    ) : (
      <OptionLeaf key={`otl-${leaf}`} leaf={leaf} />
    );
  });

  return (
    <div className="app-configtab-tree">
      { leafs }
    </div>
  );
};

export default OptionTree;
