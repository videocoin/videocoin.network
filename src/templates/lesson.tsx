import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Container from 'styles/Container';
import { Typography, Button } from 'ui-kit';
import Video from 'components/Video';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 100px 0;
`;
const Title = styled(Typography)`
  margin-bottom: 24px;
`;
const Inner = styled.div`
  max-width: 60%;
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
  const { title, number, description, videoUrl } = frontmatter;
  return (
    <Layout>
      <Container>
        <Wrapper>
          <VideoContainer>
            <Video videoSrcURL={videoUrl} videoTitle={title} />
          </VideoContainer>
          <Inner>
            <Typography type="smallTitle">Lesson #{number}</Typography>
            <Title type="title">{title}</Title>
            <Typography>{description}</Typography>
          </Inner>
          <ClaimButton>
            <Button>Claim VID Tokens</Button>
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
      }
    }
  }
`;

export default Lesson;
