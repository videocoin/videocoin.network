import React from 'react';
import { Link } from 'react-scroll';
import apps from './apps';
import { Typography } from 'ui-kit';
import { SidebarWrapper } from './styles';

const Sidebar = () => {
  const renderLink = ({ name, id }: { name: string; id: string }) => (
    <Link
      offset={-24}
      duration={500}
      activeClass="active"
      spy
      smooth
      to={id}
      key={id}
    >
      <Typography type="subtitle">{name}</Typography>
    </Link>
  );
  return <SidebarWrapper>{apps.map(renderLink)}</SidebarWrapper>;
};

export default Sidebar;
