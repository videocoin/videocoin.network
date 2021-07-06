import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Text from 'components/UI/Text';
import Button from 'components/UI/Button';
import MainBlock from 'components/MainBlock';

const Pricing = () => {
  const data = useStaticQuery(graphql`
    {
      orbital: file(relativePath: { eq: "developersPricing.png" }) {
        childImageSharp {
          gatsbyImageData(width: 467, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <MainBlock
      reverse
      background="white0"
      left={
        <GatsbyImage
          alt=""
          image={data.orbital.childImageSharp.gatsbyImageData}
        />
      }
      right={
        <>
          <Text variant="subtitle" withGradient>
            More video. Fewer bucks.
          </Text>
          <Text variant="title" marginB={16}>
            Pricing
          </Text>
          <Text color="grey70_72" marginB={48}>
            The VideoCoin Network taps unused compute resources through the
            blockchain to deliver dramatically lower costs. Then we pass those
            savings on to you with one low price for all your video processing.
            <br />
            Ready to get started?
          </Text>
          <a href="" target="_blank" rel="noopener noreferrer">
            <Button>Join for free</Button>
          </a>
        </>
      }
    />
  );
};

export default Pricing;
