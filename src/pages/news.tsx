import React from 'react';
import Text from 'components/UI/Text';
import SEO from 'components/seo';
import Layout from 'components/layout';
import MainNews from 'components/News/MainNews';
import NewsList from 'components/News/NewsList';
import Join from 'components/Home/Join';
import Button from 'components/UI/Button';
import { graphql, useStaticQuery } from 'gatsby';

const News = () => {
  const { allFile } = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "news" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, height: 184, width: 368)
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="News" />
      <Text variant="title2" color="violet50" align="center" marginT={60}>
        VideoCoin
      </Text>
      <Text variant="display1" align="center">
        Newsroom
      </Text>
      <MainNews covers={allFile} />
      <NewsList covers={allFile} />
      <Join
        text="Read all of our news on Medium"
        button={
          <a
            href="https://medium.com/videocoin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button simple>Medium</Button>
          </a>
        }
      />
    </Layout>
  );
};

export default News;
