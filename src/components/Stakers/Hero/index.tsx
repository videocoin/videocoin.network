import React from 'react';
import { Root, Inner, Left, Right, Subtitle, Title } from './styles';
import { MarketingButton } from 'ui-kit';
import Container from 'styles/Container';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const WorkersHero = () => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "stakersHero.png" }) {
        childImageSharp {
          fixed(width: 600, quality: 100) {
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
            <Img fixed={data.file.childImageSharp.fixed} />
          </Left>
          <Right>
            <Subtitle type="subtitleCaps">
              <span>Delegated staking</span> on videocoin network
            </Subtitle>
            <Title type="display3" theme="white">
              Stake your VideoCoin tokens to earn cash rewards.
            </Title>
            <Link to="/signup?role=miner">
              <MarketingButton>Get Started</MarketingButton>
            </Link>
          </Right>
        </Inner>
      </Container>
    </Root>
  );
};

export default WorkersHero;
