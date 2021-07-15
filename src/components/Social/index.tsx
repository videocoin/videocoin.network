import React from 'react';
import { SocialLink, SocialList } from './styles';
import facebookIcon from './assets/facebook.svg';
import twitterIcon from './assets/twitter.svg';
import mediumIcon from './assets/medium.svg';
import redditIcon from './assets/reddit.svg';
import youtubeIcon from './assets/youtube.svg';
import telegramIcon from './assets/telegram.svg';

interface SocialLinkProps {
  name: string;
  link: string;
  icon: string;
}

const socialList: SocialLinkProps[] = [
  {
    name: 'facebook',
    icon: facebookIcon,
    link: 'https://www.facebook.com/videocoin',
  },
  {
    name: 'twitter',
    icon: twitterIcon,
    link: 'https://twitter.com/VideoCoinHQ',
  },
  {
    name: 'medium',
    icon: mediumIcon,
    link: 'https://medium.com/videocoin',
  },
  {
    name: 'youtube',
    icon: youtubeIcon,
    link: 'https://www.youtube.com/channel/UChyso79nMDhzDm0l0e7UuYQ',
  },
  {
    name: 'telegram',
    icon: telegramIcon,
    link: 'https://t.me/videocoin',
  },
];

const Social = () => {
  const renderLink = ({ name, link, icon }: SocialLinkProps) => (
    <SocialLink key={name} href={link}>
      <img src={icon} alt={name} />
      <span>{name}</span>
    </SocialLink>
  );
  return <SocialList>{socialList.map(renderLink)}</SocialList>;
};

export default Social;
