import React from 'react';
import { Link } from 'react-scroll';
import apps from './apps';
import { SidebarWrapper, ExternalLink } from './styles';
import View from 'components/View';
import Text from 'components/UI/Text';
import github from 'icons/github.svg';
import dockerhub from 'icons/dockerHub.svg';

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
      <Text>{name}</Text>
    </Link>
  );
  return (
    <SidebarWrapper>
      <View marginB={32}>{apps.map(renderLink)}</View>
      <ExternalLink href="https://github.com/videocoin?q=&type=public">
        <img src={github} alt="" />
        <div>VideoCoin Github</div>
      </ExternalLink>
      <ExternalLink href="https://hub.docker.com/u/videocoinnetwork">
        <img src={dockerhub} alt="" />
        <div>VideoCoin Docker Hub</div>
      </ExternalLink>
    </SidebarWrapper>
  );
};

export default Sidebar;
