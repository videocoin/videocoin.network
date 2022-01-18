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
  background: ${Colors.white20};
  padding-top: 72px;
  padding-bottom: 60px;
  margin-top: 24px;
`;

const Allocation = () => {
  const data = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "allocation.png" }) {
        childImageSharp {
          gatsbyImageData(width: 914, quality: 100, layout: CONSTRAINED)
        }
      }
      percenter: file(relativePath: { eq: "percenter.png" }) {
        childImageSharp {
          gatsbyImageData(width: 336, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <Root>
      <Container>
        <Text variant="title2" color="violet50" align="center" marginB={50}>
          2022 VID Lockups
        </Text>
      </Container>
      <MainBlock
        reverse
        left={
          <View paddingV={48}>
            <GatsbyImage
              alt=""
              image={data.percenter.childImageSharp.gatsbyImageData}
            />
          </View>
        }
        right={
          <>
            <Text variant="title" marginB={16}>
              80 million uncirculating VID tokens are locked for 2022.
            </Text>
            <Text color="grey70_72">
               The circulating supply of VID tokens is anticipated to increase by 15% over the course of 2022 to support business development, a continuation of staking rewards programs, and advisory commitments.
            </Text>
          </>
        }
      />
      <Container>
        <View marginT={55}>
          <Text variant="title" align="center" marginB={12}>
            Efficient Use Of Supply
          </Text>
          <Text align="center">
            Remaining supply supports utilization, demand, and growth
            initiatives during the lockup period.
          </Text>
        </View>
      </Container>
    </Root>
  );
};

export default Allocation;
