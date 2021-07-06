import Layout from 'components/layout';
import SEO from 'components/seo';
import React from 'react';
import DevelopersHero from 'components/Developers/Hero';
import DemoApplication from 'components/Developers/Demo';
import Tutorials from 'components/Tutorials';
import FooterCards from 'components/FooterCards';
import WorkersCard from 'components/FooterCards/WorkersCard';
import StakersCard from 'components/FooterCards/StakersCard';
import Container from 'styles/Container';
import Join from 'components/Join';
import Pricing from 'components/Developers/Pricing';
import CodeSmarter from 'components/Developers/CodeSmarter';
import NFT from 'components/Developers/NFT';

const tutorials = [
  {
    title: 'Setup a Livestream From the VideoCoin Console',
    link: 'https://docs.videocoin.network/getting-started-1',
    color: 'white0',
    light: false,
  },
  {
    title: 'File Transcoding via VideoCoin Console',
    link: 'https://docs.videocoin.network/file-transcoding-with-videocoin',
    color: 'violet50',
    light: true,
  },
  {
    title: 'File Transcoding via API',
    link: 'https://docs.videocoin.network/developers/vod-stream',
    color: 'violet10',
    light: false,
  },
  {
    title: 'How to Livestream with a GoPro Hero 7',
    link: 'https://medium.com/videocoin/how-to-livestream-with-a-gopro-hero7-on-the-videocoin-network-ab4c3631ad76',
    color: 'violet80',
    light: true,
  },
  {
    title: 'Livestream using OBS',
    link: 'https://docs.videocoin.network/vid-obs',
    color: 'violet10',
    light: false,
  },
  {
    title: 'Streaming with the Wyze2 Camera',
    link: 'https://docs.videocoin.network/vid-wyze2',
    color: 'violet80',
    light: true,
  },
];

const DevelopersPage = () => (
  <Layout light>
    <SEO title="Developers" />
    <DevelopersHero />
    <CodeSmarter />
    <NFT />
    <Pricing />
    <DemoApplication />
    <Tutorials cards={tutorials} />
    <Join />
    <FooterCards>
      <Container>
        <div>
          <WorkersCard />
          <StakersCard />
        </div>
      </Container>
    </FooterCards>
  </Layout>
);

export default DevelopersPage;
