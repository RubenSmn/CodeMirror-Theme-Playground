import { Tag } from '@codemirror/highlight';
import React from 'react';
import { tagMap } from '../constants';

interface Props {
  leaf: string;
  children?: React.ReactNode;
  handleChange: (event: any, tag: Tag) => void
};

const OptionLeaf: React.FC<Props> = (props) => {
  const { leaf, children, handleChange } = props;
  const tag = tagMap[leaf];

  return (
    <div className="app-configtab-tag" key={`act-${leaf}`}>
      <label htmlFor={`configtab-tag-${leaf}`}>Color for: { leaf }</label>
      <input
        id={`configtab-tag-${leaf}`}
        onChange={(e) => handleChange(e, tag)}
      />
      { children }
    </div>
  );
};

export default OptionLeaf;
