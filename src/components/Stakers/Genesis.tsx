import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import { MarketingButton, Typography } from 'ui-kit';
import { Descr, ImgWrapper } from 'components/Stakers/styles';

const GenesisPool = () => {
  const data = useStaticQuery(graphql`
    query {
      real: file(relativePath: { eq: "genesisPool.png" }) {
        childImageSharp {
          fluid(maxWidth: 697, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);
  return (
    <Link to="/genesis-staking">
      <ImgWrapper>
        <Img fluid={data.real.childImageSharp.fluid} />
      </ImgWrapper>
      <Descr>
        <Typography type="display4">Genesis Pool Staking</Typography>
        <Typography type="subtitleThin">
          Earn VID rewards by staking your VID into worker pools with our simple
          to use staking app.
        </Typography>
      </Descr>
      <MarketingButton>Learn More</MarketingButton>
    </Link>
  );
};

export default GenesisPool;
