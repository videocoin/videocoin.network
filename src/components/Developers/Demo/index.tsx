import React from 'react';
import { Root, Inner } from './styles';
import { Typography } from 'ui-kit';
import Container from 'styles/Container';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { useTranslation } from 'react-i18next';

const DemoApplication = () => {
  const { t } = useTranslation('developers');
  const data = useStaticQuery(graphql`
    query {
      orbital: file(relativePath: { eq: "orbital.png" }) {
        childImageSharp {
          fluid(maxWidth: 379, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      github: file(relativePath: { eq: "github.png" }) {
        childImageSharp {
          fixed(width: 144, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Root>
      <Container>
        <Typography type="display3" align="center">
          {t('Demo Application')}
        </Typography>
        <Inner>
          <Img fluid={data.orbital.childImageSharp.fluid} />
          <Typography type="subtitleThin" opacity="drift">
            <a
              href="https://github.com/videocoin/orbital-android"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img fixed={data.github.childImageSharp.fixed} />
            </a>
            {t(
              'With Orbital see how easy it is to get an application started on VideoCoin Network Orbital runs seamlessly across iOS Android and Web'
            )}
          </Typography>
        </Inner>
      </Container>
    </Root>
  );
};

export default DemoApplication;
