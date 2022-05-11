import React from 'react';
import { Tag, tags } from '@codemirror/highlight';

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

  const tagItems = Object.entries(tags).map((entry: any) => {
    const [tagName, tag] = entry;
    return (
      <div className="app-configtab-tag" key={`act-${tagName}`}>
	<label htmlFor={`configtab-tag-${tagName}`}>Color for: { tagName }</label>
	<input
	  id={`configtab-tag-${tagName}`}
	  onChange={(e) => handleChange(e, tag)}
	/>
      </div>
    )
  });

  return (
    <div className="app-configtab">
      <h4>Config Tab</h4>
      { tagItems }
    </div>
  );
};

export default ConfigTab;
