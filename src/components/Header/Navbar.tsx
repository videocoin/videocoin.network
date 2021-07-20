import React from 'react';
import { NavLink, NavList, NavRoot, SubPopup } from './styles';

interface LinkProps {
  name: string;
  path: string;
  subMenu?: LinkProps[];
  external?: boolean;
}

const links: LinkProps[] = [
  {
    name: 'News',
    path: '/news',
  },
  {
    name: 'Developers',
    path: '/developers',
    subMenu: [
      {
        name: 'Block Explorer',
        path: 'https://explorer.videocoin.network',
        external: true,
      },
      {
        name: 'Community Forum',
        path: 'https://forum.videocoin.network',
        external: true,
      },
      {
        name: 'Developer Docs',
        path: 'https://docs.videocoin.network',
        external: true,
      },
    ],
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
        path: '/stakers/cash-staking',
      },
      {
        name: 'Genesis Pool',
        path: '/stakers/genesis-staking',
      },
    ],
  },
  {
    name: 'Rewards',
    path: '/rewards',
  },
  {
    name: 'Token',
    path: '/token',
  },
];
const SubList = ({ links }: { links: LinkProps[] }) => {
  return <SubPopup>{links.map(renderLink)}</SubPopup>;
};

const renderLink = ({ name, path, subMenu, external }: LinkProps) => {
  return (
    <li key={name}>
      {external ? (
        <a href={path} target="_blank" rel="noreferrer noopener">
          {name}
        </a>
      ) : (
        <NavLink to={path} partiallyActive activeClassName="active">
          {name}
        </NavLink>
      )}
      {subMenu && <SubList links={subMenu} />}
    </li>
  );
};

const Navbar = ({ open }: { open: boolean }) => {
  return (
    <NavRoot $open={open}>
      <NavList>{links.map(renderLink)}</NavList>
    </NavRoot>
  );
};

export default Navbar;
