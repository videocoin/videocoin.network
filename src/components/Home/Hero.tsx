import React from 'react';
import * as S from './styles';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import View from 'components/View';
import Container from 'styles/Container';
import News from 'components/Home/News';

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "hero_image.png" }) {
        childImageSharp {
          gatsbyImageData(width: 835, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <S.Hero>
      <Container>
        <div>
          <GatsbyImage
            alt=""
            image={data.file.childImageSharp.gatsbyImageData}
          />
          <View column left flex={1}>
            <S.Title variant="display2" marginB={28}>
              Powering NFTs for everyone
            </S.Title>
            <S.HeroText>
              VideoCoin creates NFTs that are complete media experiences. It’s
              the next-gen solution for entirely new content and brand
              engagement.
            </S.HeroText>
            <br />
            <S.HeroText>
              We enable any content creator, brand, retailer, or content
              platform to mint and sell expansive NFTs through our
              blockchain-enabled, decentralized network.
            </S.HeroText>
          </View>
        </div>
      </Container>
      <News />
    </S.Hero>
  );
};

export default Hero;
