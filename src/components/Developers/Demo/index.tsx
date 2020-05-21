import React from 'react';
import { Root, Inner } from './styles';
import { Typography } from 'ui-kit';
import Container from 'styles/Container';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const DemoApplication = () => {
  const data = useStaticQuery(graphql`
    query {
      orbital: file(relativePath: { eq: "orbital.png" }) {
        childImageSharp {
          fixed(width: 379, quality: 100) {
            ...GatsbyImageSharpFixed
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
          Demo Application
        </Typography>
        <Inner>
          <div>
            <Img fixed={data.orbital.childImageSharp.fixed} />
          </div>
          <Typography type="subtitleThin" opacity="drift">
            <a href="#">
              <Img fixed={data.github.childImageSharp.fixed} />
            </a>
            <br />
            With Orbital, see how easy it is to get an application started on
            VideoCoin Network. Orbital runs seamlessly across iOS, Android, and
            Web.
          </Typography>
        </Inner>
      </Container>
    </Root>
  );
};

export default DemoApplication;
