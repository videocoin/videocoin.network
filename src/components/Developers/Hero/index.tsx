import React from 'react';
import { MarketingButton, Typography } from 'ui-kit';
import { Root, Btns, Subtitle } from './styles';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const DevelopersHero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "developersHero.png" }) {
        childImageSharp {
          fluid(maxWidth: 583, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Root>
      <Img fluid={data.file.childImageSharp.fluid} />
      <div>
        <Subtitle type="subtitleCaps">
          <span>Develop</span> on VideoCoin Network
        </Subtitle>
        <Typography type="display3" theme="white">
          Robust video infrastructure with just a few lines of code.
        </Typography>
        <Btns>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://studio.videocoin.network/sign-up?role=publisher"
          >
            <MarketingButton>Join for Free</MarketingButton>
          </a>
          <a
            href="https://docs.videocoin.network"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MarketingButton theme="link-secondary">
              Developers Docs
            </MarketingButton>
          </a>
        </Btns>
      </div>
    </Root>
  );
};

export default DevelopersHero;
