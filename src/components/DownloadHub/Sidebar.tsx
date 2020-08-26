import React from 'react';
import { Link } from 'react-scroll';
import apps from './apps';
import { Icon, Typography } from 'ui-kit';
import { SidebarWrapper, ExternalLink } from './styles';
import View from 'components/View';

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
  return (
    <SidebarWrapper>
      <View marginB={32}>{apps.map(renderLink)}</View>
      <ExternalLink href="https://github.com/videocoin?q=&type=public">
        <Icon name="github" />
        <div>VideoCoin Github</div>
      </ExternalLink>
      <ExternalLink href="https://hub.docker.com/u/videocoinnetwork">
        <Icon name="dockerHub" />
        <div>VideoCoin Docker Hub</div>
      </ExternalLink>
    </SidebarWrapper>
  );
};

export default Sidebar;
