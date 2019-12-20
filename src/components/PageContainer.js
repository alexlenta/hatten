import React from 'react';

import './PageContainer.scss';

export const PageContainer = ({
  children,
  className = '',
  withModal = false,
  ...props
}) => {
  return (
    <div
      className={`PageContainer ${className} ${withModal ? 'with-modal' : ''}`}
      {...props}
    >
      <div className="page-card">{children}</div>
    </div>
  );
};
