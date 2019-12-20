import React from 'react';

export const Emoji = ({ ariaLabel = 'emoji', content = '😊' }) => {
  return (
    <span role="img" aria-label={ariaLabel}>
      {content}
    </span>
  );
};
