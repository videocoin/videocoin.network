import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Container from 'styles/Container';
import Video from 'components/Video';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { device } from '../queries';
import Button from 'components/UI/Button';
import Text from 'components/UI/Text';

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
          {!videoUrl && (
            <GatsbyImage
              alt=""
              image={thumbImage.childImageSharp.gatsbyImageData}
            />
          )}
          {externalUrl && (
            <a href={externalUrl} target="_blank" rel="noopener noreferrer">
              <Button btnTheme="secondary">Click Here to Read Article</Button>
            </a>
          )}
          <Inner>
            <Text variant="subtitle">Lesson #{number}</Text>
            <Text variant="title" marginB={24}>
              {title}
            </Text>
            <Text variant="smallBody">{description}</Text>
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
  query ($path: String!) {
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
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

export default Lesson;
