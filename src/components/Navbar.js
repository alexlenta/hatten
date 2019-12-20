import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';
import { ReactComponent as OverviewIconSrc } from '../assets/icons/navbar_icons/overview-icon.svg';
import { ReactComponent as TimerIconSrc } from '../assets/icons/navbar_icons/timer.svg';
import { ReactComponent as ShiftsIconSrc } from '../assets/icons/navbar_icons/shifts.svg';
import { ReactComponent as TaskIconSrc } from '../assets/icons/navbar_icons/task.svg';
import { ReactComponent as AccountIconSrc } from '../assets/icons/navbar_icons/user-icon.svg';

const navIcons = [
  OverviewIconSrc,
  TimerIconSrc,
  ShiftsIconSrc,
  TaskIconSrc,
  AccountIconSrc,
];

const renderNavIcon = (Icon, props) => (
  <Icon width="28px" height="28px" {...props} />
);

export const Navbar = ({ navigationItems = [] }) => {
  return (
    <nav className="Navbar">
      {navigationItems.map((navItem, i) => (
        <NavLink className="nav-item" key={navItem.id} to={navItem.path}>
          {navIcons[i] && renderNavIcon(navIcons[i])}
          <span>{navItem.name}</span>
        </NavLink>
      ))}
    </nav>
  );
};
