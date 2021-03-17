import React, { memo } from 'react';
import './NodeView.css';

const NodeView = memo(({ header, content }) => {
  return (
    <div className="nodeView">
      <div className="header">
        {header}
      </div>
      {content}
    </div>
  )
})

export default NodeView;