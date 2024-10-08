import React from 'react';
import Text from 'components/UI/Text';
import View from 'components/View';
import roadmap from 'icons/roadmap.svg';
import MainBlock from 'components/MainBlock';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as S from './styles';
import { useBreakpoint } from 'components/BrealpointProvider';

const Roadmap = () => {
  const { mobile, tablet } = useBreakpoint();
  const data = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "timeline.png" }) {
        childImageSharp {
          gatsbyImageData(width: 739, quality: 100, layout: CONSTRAINED)
        }
      }
      imageSm: file(relativePath: { eq: "timeline_sm.png" }) {
        childImageSharp {
          gatsbyImageData(width: 375, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <S.Roadmap>
      <View centerV row centerH column={mobile}>
        <img src={roadmap} width={56} height={56} alt="" />
        <Text paddingT={7} marginL={mobile ? 0 : 36} variant="display3">
          Roadmap
        </Text>
      </View>
      <MainBlock
        reverse
        left={
          <View marginH={mobile ? -28 : 0}>
            <GatsbyImage
              alt=""
              image={
                mobile
                  ? data.imageSm.childImageSharp.gatsbyImageData
                  : data.image.childImageSharp.gatsbyImageData
              }
            />
          </View>
        }
        right={
          <View paddingL={tablet ? 0 : 102}>
            <Text variant="display3" marginB={6} color="violet80">
              Our Journey
            </Text>
            <S.Text>
              <Text variant="subtitle" color="grey50" marginB={6}>
                Where we’ve been.
              </Text>
              <Text variant="subtitle" color="grey50" marginB={6}>
                Where we’re headed.
              </Text>
              <Text variant="subtitle" color="grey50">
                Join Us.
              </Text>
            </S.Text>
          </View>
        }
      />
    </S.Roadmap>
  );
};

export default Roadmap;
