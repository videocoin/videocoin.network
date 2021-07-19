import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Text from 'components/UI/Text';
import MainBlock from 'components/MainBlock';
import * as S from './styles';

const CodeSmarter = () => {
  const data = useStaticQuery(graphql`
    {
      orbital: file(relativePath: { eq: "developersCode.png" }) {
        childImageSharp {
          gatsbyImageData(width: 519, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <MainBlock
      reverse
      background="white10"
      left={
        <GatsbyImage
          alt=""
          image={data.orbital.childImageSharp.gatsbyImageData}
        />
      }
      right={
        <S.Section>
          <Text variant="subtitle" withGradient uppercase>
            Code smarter.
          </Text>
          <Text variant="title" marginB={16}>
            Create NextGen <br />
            Video Apps with Ease
          </Text>
          <Text color="grey70_72" marginB={48}>
            VideoCoin helps supercharge your video applications through a{' '}
            <strong>highly efficient decentralized network</strong> engineered
            to handle a full range of video processing requirements, from
            encoding to streaming. Our APIs let you craft applications from VOD
            to VR to livestreaming with a minimum of effort, and at huge cost
            savings.
          </Text>
        </S.Section>
      }
    />
  );
};

export default CodeSmarter;
