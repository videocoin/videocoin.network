import React from 'react';
import { Root, Inner, Left, Right, Subtitle, Title } from './styles';
import { MarketingButton } from 'ui-kit/*';
import Container from 'styles/Container';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const StakersHero = () => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "genesisPool.png" }) {
        childImageSharp {
          fixed(width: 680, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Root>
      <Container>
        <Inner>
          <Left>
            <Subtitle type="subtitleCaps">
              <span>Genesis staking</span> on videocoin network
            </Subtitle>
            <Title type="display3" theme="white">
              Genesis staking lets you stake your VideoCoin for VID rewards.
            </Title>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://staking.videocoin.network"
            >
              <MarketingButton>Get Started</MarketingButton>
            </a>
          </Left>
          <Right>
            <Img fixed={data.file.childImageSharp.fixed} />
          </Right>
        </Inner>
      </Container>
    </Root>
  );
};

export default StakersHero;
