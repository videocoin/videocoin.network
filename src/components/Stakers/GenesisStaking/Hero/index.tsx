import React from 'react';
import { Root, Inner, Left, Right } from './styles';
import Container from 'styles/Container';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Text from 'components/UI/Text';
import View from 'components/View';
import stakersIcon from 'icons/staker.svg';
import Button from 'components/UI/Button';

const StakersHero = () => {
  const data = useStaticQuery(graphql`
    {
      file: file(relativePath: { eq: "genesisPoolHero.png" }) {
        childImageSharp {
          gatsbyImageData(width: 460, quality: 100, layout: FIXED)
        }
      }
    }
  `);
  return (
    <Root>
      <Container>
        <Inner>
          <Left>
            <View row centerV marginB={8}>
              <img src={stakersIcon} width={36} height={36} alt="" />
              <Text variant="subtitle" withGradient uppercase marginL={12}>
                GENESIS STAKING ON VIDEOCOIN NETWORK
              </Text>
            </View>
            <Text variant="display2" marginB={36}>
              Genesis staking lets you stake your VideoCoin for VID rewards.
            </Text>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://staking.videocoin.network"
            >
              <Button>Get Started</Button>
            </a>
          </Left>
          <Right>
            <GatsbyImage
              alt=""
              image={data.file.childImageSharp.gatsbyImageData}
            />
          </Right>
        </Inner>
      </Container>
    </Root>
  );
};

export default StakersHero;
