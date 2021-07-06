import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';
import Text from 'components/UI/Text';
import Button from 'components/UI/Button';
import MainBlock from 'components/MainBlock';

const DemoApplication = () => {
  const { t } = useTranslation('developers');
  const data = useStaticQuery(graphql`
    {
      orbital: file(relativePath: { eq: "orbital.png" }) {
        childImageSharp {
          gatsbyImageData(width: 479, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <MainBlock
      background="white10"
      left={
        <GatsbyImage
          alt=""
          image={data.orbital.childImageSharp.gatsbyImageData}
        />
      }
      right={
        <>
          <Text variant="subtitle" withGradient>
            Try us. You'll like us.
          </Text>
          <Text variant="title" marginB={16}>
            {t('Demo Application')}
          </Text>
          <Text color="grey70_72" marginB={48}>
            With Orbital, see how easy it is to get an application started on
            VideoCoin Network. Orbital runs seamlessly across iOS, Android, and
            Web.
          </Text>
          <a
            href="https://github.com/videocoin/orbital-android"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Download on Github</Button>
          </a>
        </>
      }
    />
  );
};

export default DemoApplication;
