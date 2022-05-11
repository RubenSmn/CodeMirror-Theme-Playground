import React from 'react';
import OptionLeaf from './option-leaf';
import type { Tag } from '@codemirror/highlight';

interface Props {
  tree: { [index: string]: {} };
  handleChange: (event: any, tag: Tag) => void;
};

const OptionTree: React.FC<Props> = (props) => {
  const { tree, handleChange } = props;

  const leafs = Object.keys(tree).map((leaf: string) => {
    const hasChildren = Object.keys(tree[leaf]).length > 0;

    return hasChildren ? (
      <OptionLeaf key={`otl-${leaf}`} leaf={leaf} handleChange={handleChange}>
        <OptionTree tree={tree[leaf]} handleChange={handleChange} />
      </OptionLeaf>
    ) : (
      <OptionLeaf key={`otl-${leaf}`} leaf={leaf} handleChange={handleChange} />
    )
  });

  return (
    <div className="app-configtab-tree">
      { leafs }
    </div>
  );
};

export default OptionTree;
