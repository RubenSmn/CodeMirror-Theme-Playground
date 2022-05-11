import React from 'react';
import { Tag, tags } from '@codemirror/highlight';
import OptionTree from './components/option-tree';
import { tagTree } from './constants';

interface Props {
  onChange: (updatedValues: any) => void
}
const ConfigTab: React.FC<Props> = (props) => {
  const { onChange } = props;
  const colorRegex = /^#[a-fA-F0-9]{3,6}$/;

  const handleChange = (event: any, tag: Tag) => {
    // update editor with new style
    // if value is a color
    const newValue = event.target.value;
    if (!colorRegex.test(newValue)) return;
    onChange({ tag, color: newValue });
  };

  return (
    <div className="app-configtab">
      <h4>Config Tab</h4>
      <OptionTree tree={tagTree} handleChange={handleChange} />
    </div>
  );
};

export default ConfigTab;
