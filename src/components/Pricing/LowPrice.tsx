import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import MainBlock from 'components/MainBlock';
import Text from 'components/UI/Text';
import styled from 'styled-components';
export const Section = styled.div`
  padding: 65px 0;
  @media (max-width: 768px) {
    padding: 24px 0;
  }
`;
const LowPrice = () => {
  const data = useStaticQuery(graphql`
    {
      file: file(relativePath: { eq: "developersPricing.png" }) {
        childImageSharp {
          gatsbyImageData(width: 467, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <MainBlock
      background="white20"
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
          <Text variant="title">How is our price so low</Text>
          <Text>
            By tapping into resources that would otherwise have gone unused we
            are able to keep costs as low as possible We pass those savings on
            to you
          </Text>
        </>
      }
    />
  );
};

export default LowPrice;
