import React from 'react';
import styled from 'styled-components';
import Colors from 'styles/Colors';
import Container from 'styles/Container';
import Text from 'components/UI/Text';
import { graphql, useStaticQuery } from 'gatsby';
import View from 'components/View';
import { GatsbyImage } from 'gatsby-plugin-image';
import MainBlock from 'components/MainBlock';
import Button from 'components/UI/Button';
import { useBreakpoint } from 'components/BrealpointProvider';

const Root = styled.div`
  background: ${Colors.white20};
  padding-top: 72px;
  padding-bottom: 60px;
  margin-top: 24px;
`;

const Allocation = () => {
  const { tablet } = useBreakpoint()
  const data = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "allocation.png" }) {
        childImageSharp {
          gatsbyImageData(width: 914, quality: 100, layout: CONSTRAINED)
        }
      }
      percenter: file(relativePath: { eq: "percenter.png" }) {
        childImageSharp {
          gatsbyImageData(width: 296, quality: 100, layout: CONSTRAINED)
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
          <View paddingV={48} marginL={ tablet ? 0 : 80}>
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
            <Text color="grey70_72" marginB={12}>
              Read our November 14, 2021 post for details on the 2022 lockup and token allocations.
            </Text>
            <Button as="a" target="_blank" rel="noopener noreferrer" href="https://medium.com/videocoin/videocoin-token-lock-extended-for-2022-as-multimedia-nft-project-accelerates-into-transformative-95c291b4fd1b">Read Now</Button>
          </>
        }
      />
    </Root>
  );
};

export default Allocation;
