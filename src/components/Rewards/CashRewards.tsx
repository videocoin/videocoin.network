import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Disclaimer from 'components/Rewards/Disclaimer';
import MainBlock from 'components/MainBlock';
import Text from 'components/UI/Text';

const CashRewards = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "cashRewards.png" }) {
        childImageSharp {
          gatsbyImageData(width: 329, quality: 100, layout: FIXED)
        }
      }
    }
  `);
  return (
    <MainBlock
      reverse
      left={
        <GatsbyImage alt="" image={data.file.childImageSharp.gatsbyImageData} />
      }
      right={
        <>
          <Text marginB={16} variant="title">
            Rewards in cash or VID
          </Text>
          <Text>
            VideoCoin is the first and only project to reward workers and
            delegators with flexible options of cash rewards and VID*.
          </Text>
          <Disclaimer />
        </>
      }
    />
  );
};

export default CashRewards;
