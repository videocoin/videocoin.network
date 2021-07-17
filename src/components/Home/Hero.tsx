import React from 'react';
import * as S from './styles';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import View from 'components/View';
import Text from 'components/UI/Text';
import Container from 'styles/Container';
import News from 'components/Home/News';
import { useBreakpoint } from 'components/BrealpointProvider';

const Hero = () => {
  const { tablet } = useBreakpoint();
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "developersHero.png" }) {
        childImageSharp {
          gatsbyImageData(width: 531, quality: 100, layout: CONSTRAINED)
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
          <View column left={!tablet}>
            <Text variant="display2" marginB={28}>
              Powering Next-Generation Video Apps Built By You
            </Text>
            <Text variant="subtitle" uppercase withGradient marginB={12}>
              VideoCoin: Igniting Innovation
            </Text>
            <Text>
              The VideoCoin ecosystem delivers innovative services on the
              blockchain that reimagine the future of video.
            </Text>
          </View>
        </div>
      </Container>
      <News />
    </S.Hero>
  );
};

export default Hero;
