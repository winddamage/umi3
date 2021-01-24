import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2346340_wbdszm186p.js',
});

const Icon: React.FC<{ type: string }> = props => {
  const { type } = props;

  return <IconFont type={type} />;
};

export default Icon;
