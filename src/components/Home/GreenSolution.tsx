import React from 'react';
import { GreenSolutionRoot, GreenSolutionInner } from './styles';
import { Typography } from 'ui-kit';
import Container from 'styles/Container';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const GreenSolution = () => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "green.png" }) {
        childImageSharp {
          fluid(maxWidth: 416, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <GreenSolutionRoot>
      <Container>
        <Typography type="display3" align="center">
          The Green Solution for Video
        </Typography>
        <GreenSolutionInner>
          <Img fluid={data.file.childImageSharp.fluid} />
          <Typography type="subtitleThin" opacity="drift">
            Billions of dollars of data centers lay dormant. We’ve developed an
            innovative solution that networks these resources and creates a new,
            powerful infrastructure. There is no waste, only a better way to
            work.
          </Typography>
        </GreenSolutionInner>
      </Container>
    </GreenSolutionRoot>
  );
};

export default GreenSolution;
