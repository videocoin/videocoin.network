import React from 'react';
import * as S from './styles';
import Container from 'styles/Container';
import MainBlock from 'components/MainBlock';
import Text from 'components/UI/Text';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import View from 'components/View';
import stakers from 'icons/staker.svg';
import { useBreakpoint } from 'components/BrealpointProvider';

const Stakers = () => {
  const { mobile } = useBreakpoint();
  const data = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "stakersHome.png" }) {
        childImageSharp {
          gatsbyImageData(width: 519, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <S.Root background="white10">
      <Container>
        <View centerV row centerH column={mobile}>
          <img src={stakers} width={56} height={56} alt="" />
          <Text paddingT={7} marginL={mobile ? 0 : 36} variant="display3">
            Stakers
          </Text>
        </View>
      </Container>
      <MainBlock
        left={
          <GatsbyImage
            alt=""
            image={data.image.childImageSharp.gatsbyImageData}
          />
        }
        right={
          <>
            <Text variant="subtitle" withGradient>
              Put your VID to work
            </Text>
            <Text variant="title" marginB={16} color="violet80">
              Earn cash rewards
            </Text>
            <Text color="grey70_72" marginB={48}>
              Stake your unused VID to worker nodes on the VideoCoin network to
              earn cash rewards from the work they do.
            </Text>
          </>
        }
      />
    </S.Root>
  );
};

export default Stakers;
