import React from 'react';
import { NavLink, NavList, NavRoot, SubPopup } from './styles';

interface LinkProps {
  name: string;
  path: string;
  subMenu?: LinkProps[];
}

const links: LinkProps[] = [
  {
    name: 'The Network',
    path: '/',
  },
  {
    name: 'Pricing',
    path: '/pricing',
  },
  {
    name: 'Developers',
    path: '/developers',
  },
  {
    name: 'Workers',
    path: '/workers',
  },
  {
    name: 'Stakers',
    path: '/stakers',
    subMenu: [
      {
        name: 'Cash Staking',
        path: '/cash-staking',
      },
      {
        name: 'Genesis Pool',
        path: '/genesis-staking',
      },
    ],
  },
  {
    name: 'Rewards',
    path: '/rewards',
  },
];
const SubList = ({ links }: { links: LinkProps[] }) => {
  return <SubPopup>{links.map(renderLink)}</SubPopup>;
};

const renderLink = ({ name, path, subMenu }: LinkProps) => (
  <NavLink key={name} to={path} activeClassName="active">
    {name}
    {subMenu && <SubList links={subMenu} />}
  </NavLink>
);

const Navbar = ({ open }: { open: boolean }) => {
  return (
    <NavRoot $open={open}>
      <NavList>
        {links.map(renderLink)}
        <NavLink
          as="a"
          href="https://medium.com/videocoin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </NavLink>
        <NavLink
          as="a"
          href="https://forum.videocoin.network"
          target="_blank"
          rel="noopener noreferrer"
        >
          Forum
        </NavLink>
      </NavList>
    </NavRoot>
  );
};

export default Navbar;
