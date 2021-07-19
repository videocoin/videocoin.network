import React from 'react';
import styled from 'styled-components';
import Colors from 'styles/Colors';
import Container from 'styles/Container';
import Text from 'components/UI/Text';
import { graphql, useStaticQuery } from 'gatsby';
import View from 'components/View';
import { GatsbyImage } from 'gatsby-plugin-image';
import MainBlock from 'components/MainBlock';

const Root = styled.div`
  background: ${Colors.white10};
  padding-top: 72px;
  padding-bottom: 84px;
`;

const Allocation = () => {
  const data = useStaticQuery(graphql`
    {
      miner: file(relativePath: { eq: "minerEcosystem.png" }) {
        childImageSharp {
          gatsbyImageData(width: 462, quality: 100, layout: CONSTRAINED)
        }
      }
      burnedSupply: file(relativePath: { eq: "burnedSupply.png" }) {
        childImageSharp {
          gatsbyImageData(width: 499, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <Root>
      <Container>
        <Text variant="title2" color="violet50" align="center">
          March 2019
        </Text>
        <Text variant="display1" align="center" marginB={20}>
          Updated Tokenomics
        </Text>
      </Container>
      <MainBlock
        reverse
        left={
          <View paddingV={48}>
            <GatsbyImage
              alt=""
              image={data.miner.childImageSharp.gatsbyImageData}
            />
          </View>
        }
        right={
          <>
            <Text variant="title" marginB={16}>
              Rewards For <br /> Work Without Inflation
            </Text>
            <Text color="grey70_72">
              Our new token model rewards Workers/Miners with VideoCoin (from
              fees) and Fiat, without creating new tokens.
            </Text>
          </>
        }
      />
      <MainBlock
        left={
          <View paddingV={0}>
            <GatsbyImage
              alt=""
              image={data.burnedSupply.childImageSharp.gatsbyImageData}
            />
          </View>
        }
        right={
          <>
            <Text variant="title" marginB={16}>
              70% of original supply burned
            </Text>
            <Text color="grey70_72">
              Workers are now rewarded with fiat and VideoCoin, eliminating
              token inflation and reducing the total supply by 70%
            </Text>
          </>
        }
      />
    </Root>
  );
};

export default Allocation;
