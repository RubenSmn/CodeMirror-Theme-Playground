import React from 'react';
import { tags } from '@codemirror/highlight';

const ConfigTab: React.FC = () => {
  const handleChange = (tagName: string) => {
    // update editor with new style
    console.log(tagName);
  };

  const tagItems = Object.keys(tags).map((tagName: string) => (
    <div className="app-configtab-tag">
      <label htmlFor={`configtab-tag-${tagName}`}>Color for: { tagName }</label>
      <input
	id={`configtab-tag-${tagName}`}
        onChange={() => handleChange(tagName)}
      />
    </div>
  ));

  return (
    <div className="app-configtab">
      <h4>Config Tab</h4>
      { tagItems }
    </div>
  );
};

export default ConfigTab;
