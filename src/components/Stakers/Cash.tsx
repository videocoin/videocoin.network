import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import { MarketingButton, Typography } from 'ui-kit';
import { Descr, ImgWrapper } from './styles';

const CashBased = () => {
  const data = useStaticQuery(graphql`
    query {
      cash: file(relativePath: { eq: "cashStaking.png" }) {
        childImageSharp {
          fluid(maxWidth: 642, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);
  return (
    <Link to="/worker-staking">
      <ImgWrapper>
        <Img fluid={data.cash.childImageSharp.fluid} />
      </ImgWrapper>
      <Descr>
        <Typography type="display4">Cash Based Staking</Typography>
        <Typography type="subtitleThin">
          Earn cash rewards by staking directly with workers on the VideoCoin
          Network.
        </Typography>
      </Descr>
      <MarketingButton>Learn More</MarketingButton>
    </Link>
  );
};

export default CashBased;
