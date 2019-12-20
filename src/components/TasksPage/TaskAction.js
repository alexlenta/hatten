import React from 'react';

import './TaskAction.scss';
import { ReactComponent as EditSrc } from '../../assets/icons/edit-add-remove_icons/edit.svg';
import { ReactComponent as AddSrc } from '../../assets/icons/edit-add-remove_icons/add-button.svg';
import { ReactComponent as RemoveSrc } from '../../assets/icons/edit-add-remove_icons/remove.svg';

const icons = [EditSrc, AddSrc, RemoveSrc];

const renderIcon = (Icon, props) => (
  <Icon width="16px" height="16px" {...props} />
);

export const TaskAction = ({ action = {}, i = 0, onClick = null }) => {
  return (
    // eslint-disable-next-line
    <div className="TaskAction" onClick={onClick}>
      {icons[i] && renderIcon(icons[i])}
      <span>{action.name}</span>
    </div>
  );
};
