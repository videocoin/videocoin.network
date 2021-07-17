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
  padding-bottom: 77px;
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
        <Text variant="title2" color="violet50" align="center">
          December 2020
        </Text>
        <Text variant="display1" align="center" marginB={100}>
          Extended Company Token Lockups
        </Text>
        <View row centerH marginB={48}>
          <GatsbyImage
            alt=""
            image={data.image.childImageSharp.gatsbyImageData}
          />
        </View>
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
              76% of uncirculated <br /> supply locked up
            </Text>
            <Text color="grey70_72">
              This lockup though the end of 2021 impacts over 90 million tokens
              held by the VDA and our service providers partners, and represents
              76% of the non-circulating VID token supply.
            </Text>
          </>
        }
      />
      <Container>
        <View marginT={80}>
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
