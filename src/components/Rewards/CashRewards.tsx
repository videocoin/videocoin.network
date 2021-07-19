import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Disclaimer from 'components/Rewards/Disclaimer';
import MainBlock from 'components/MainBlock';
import Text from 'components/UI/Text';
import { Section } from './styles';

const CashRewards = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "cashRewards.png" }) {
        childImageSharp {
          gatsbyImageData(width: 329, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <MainBlock
      reverse
      left={
        <Section>
          <GatsbyImage
            alt=""
            image={data.file.childImageSharp.gatsbyImageData}
          />
        </Section>
      }
      right={
        <>
          <Text marginB={16} variant="title">
            Rewards in Cash or VID
          </Text>
          <Text>
            VideoCoin is the first and only project to reward Workers and
            Delegators with flexible options of cash rewards and VID.
          </Text>
        </>
      }
    />
  );
};

export default CashRewards;
