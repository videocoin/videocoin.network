import React from 'react';
import { NavLink, NavList, NavRoot, SubPopup } from './styles';
import { useTranslation } from 'react-i18next';

interface LinkProps {
  name: string;
  path: string;
  subMenu?: LinkProps[];
  external?: boolean;
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
        path: '/worker-staking',
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

const renderLink = ({ name, path, subMenu, external }: LinkProps) => {
  const { t } = useTranslation();
  return (
    <li key={name}>
      {external ? (
        <a href={path} target="_blank" rel="noreferrer noopener">
          {t(name)}
        </a>
      ) : (
        <NavLink to={path} activeClassName="active">
          {t(name)}
        </NavLink>
      )}
      {subMenu && <SubList links={subMenu} />}
    </li>
  );
};

const Navbar = ({ open, light }: { open: boolean; light?: boolean }) => {
  const { t } = useTranslation();
  return (
    <NavRoot $open={open} $light={light}>
      <NavList>
        {links.map(renderLink)}
        <li>
          <NavLink
            as="a"
            href="https://medium.com/videocoin"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('Blog')}
          </NavLink>
        </li>
      </NavList>
    </NavRoot>
  );
};

export default Navbar;
