import { Tag } from '@codemirror/highlight';
import React from 'react';
import { tagMap } from '../constants';
import { useEditorTheme } from './theme-provider';

interface Props {
  leaf: string;
  children?: React.ReactNode;
};

const OptionLeaf: React.FC<Props> = (props) => {
  const { leaf, children } = props;
  const tag = tagMap[leaf];
  const [_, setEditorTheme] = useEditorTheme();
  const colorRegex = /^#[a-fA-F0-9]{3,6}$/;

  const handleChange = (event: any, tag: Tag) => {
    // update editor with new style
    // if value is a color
    const newValue = event.target.value;
    if (!colorRegex.test(newValue)) return;
    setEditorTheme((prevState: any): any => {
      return [
        ...prevState,
	{ tag, color: newValue },
      ];
    });
  };

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
