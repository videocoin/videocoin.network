import React from 'react';
import { NavLink, NavList, NavRoot } from './styles';

interface LinkProps {
  name: string;
  path: string;
}

const links: LinkProps[] = [
  {
    name: 'The Network',
    path: '/',
  },
  {
    name: 'Pricing',
    path: '/pricing/',
  },
  {
    name: 'Developers',
    path: '/developers/',
  },
  {
    name: 'Workers',
    path: '/workers/',
  },
  {
    name: 'Stakers',
    path: '/stakers/',
  },
  {
    name: 'Rewards',
    path: '/rewards/',
  },
  {
    name: 'Blog',
    path: '/blog/',
  },
];

const Navbar = ({ open }: { open: boolean }) => {
  const renderLink = ({ name, path }: LinkProps) => (
    <NavLink key={name} to={path} activeClassName="active">
      {name}
    </NavLink>
  );
  return (
    <NavRoot $open={open}>
      <NavList>{links.map(renderLink)}</NavList>
    </NavRoot>
  );
};

export default Navbar;
