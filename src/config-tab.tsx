import React from 'react';
import OptionTree from './components/option-tree';
import { tagTree } from './constants';

const ConfigTab: React.FC = () => {
  return (
    <div className="app-configtab">
      <h4>Config Tab</h4>
      <OptionTree tree={tagTree} />
    </div>
  );
};

export default ConfigTab;
