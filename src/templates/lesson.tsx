import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Container from 'styles/Container';
import { Typography, Button } from 'ui-kit';
import Video from 'components/Video';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { device } from '../queries';

const Wrapper = styled.div`
  padding: 100px 0;
  .gatsby-image-wrapper {
    margin-bottom: 24px;
  }
  a {
    display: inline-block;
    margin-bottom: 24px;
  }
`;
const Title = styled(Typography)`
  margin-bottom: 24px;
`;
const Inner = styled.div`
  max-width: 60%;
  @media ${device.mobile} {
    max-width: 100%;
  }
`;
const ClaimButton = styled.div`
  text-align: center;
  margin-top: 24px;
`;
const VideoContainer = styled.div`
  position: relative;
  padding-top: 56.25%;
  margin-bottom: 32px;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Lesson = ({ data }: any) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  const {
    title,
    number,
    description,
    videoUrl,
    externalUrl,
    thumbImage,
    googleLink,
  } = frontmatter;
  return (
    <Layout>
      <Container>
        <Wrapper>
          {videoUrl && (
            <VideoContainer>
              <Video videoSrcURL={videoUrl} videoTitle={title} />
            </VideoContainer>
          )}
          {!videoUrl && <Img fluid={thumbImage.childImageSharp.fluid} />}
          {externalUrl && (
            <a href={externalUrl} target="_blank" rel="noopener noreferrer">
              <Typography theme="sunkissed" type="title">
                Click Here to Read Article
              </Typography>
            </a>
          )}
          <Inner>
            <Typography type="smallTitle">Lesson #{number}</Typography>
            <Title type="title">{title}</Title>
            <Typography>{description}</Typography>
          </Inner>
          <ClaimButton>
            <a href={googleLink} target="_blank" rel="noopener noreferrer">
              <Button>Claim 10 VID Token</Button>
            </a>
          </ClaimButton>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        number
        title
        description
        path
        googleLink
        videoUrl
        externalUrl
        thumbImage {
          childImageSharp {
            fluid(maxWidth: 1040) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default Lesson;
