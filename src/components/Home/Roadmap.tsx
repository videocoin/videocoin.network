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
  const { mobile } = useBreakpoint();
  const data = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "timeline.png" }) {
        childImageSharp {
          gatsbyImageData(width: 739, quality: 100, layout: CONSTRAINED)
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
          <GatsbyImage
            alt=""
            image={data.image.childImageSharp.gatsbyImageData}
          />
        }
        right={
          <>
            <Text variant="title" marginB={16} color="violet80">
              Our Journey
            </Text>
            <Text color="grey70_72" marginB={48}>
              Where we’ve been.
              <br />
              Where we’re headed.
              <br />
              Join Us.
            </Text>
          </>
        }
      />
    </S.Roadmap>
  );
};

export default Roadmap;
