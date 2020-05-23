import React from 'react';
import { SocialLink, SocialList } from './styles';

interface SocialLinkProps {
  name: string;
  link: string;
}

const socialList: SocialLinkProps[] = [
  {
    name: 'facebook',
    link: 'https://www.facebook.com/videocoin',
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/VideoCoinHQ',
  },
  {
    name: 'medium',
    link: 'https://medium.com/videocoin',
  },
  {
    name: 'reddit',
    link: 'https://www.reddit.com/r/VideoCoin/',
  },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/channel/UChyso79nMDhzDm0l0e7UuYQ',
  },
  {
    name: 'telegram',
    link: 'https://t.me/videocoin',
  },
  {
    name: 'github',
    link: 'https://github.com/videocoin',
  },
  {
    name: 'discord',
    link: 'https://discordapp.com/invite/czSzKT7',
  },
];

const Social = () => {
  const renderLink = ({ name, link }: SocialLinkProps) => (
    <SocialLink key={name} href={link}>
      <span className={`icon-${name}`} />
      <span>{name}</span>
    </SocialLink>
  );
  return <SocialList>{socialList.map(renderLink)}</SocialList>;
};

export default Social;
