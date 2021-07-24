import React from 'react';
import Container from 'styles/Container';
import * as S from './styles';
import Button from 'components/UI/Button';
import Text from 'components/UI/Text';
import news from '../../news';
import { useBreakpoint } from 'components/BrealpointProvider';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

const MainNews = () => {
  const { mobile } = useBreakpoint();
  const { cover, date, source, link, title, description } = news['8'];
  const { allFile } = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "news" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, height: 295, width: 590)
            }
          }
        }
      }
    }
  `);
  const { node: coverNode } = allFile.edges.find(
    ({ node }) => node.name === cover
  );
  const image = getImage(coverNode);
  return (
    <Container>
      <S.MainNews>
        <div>{image && <GatsbyImage image={image} alt="" />}</div>
        <div>
          <Text variant="caption" color="orange60">
            {date}
          </Text>
          <Text variant="smallBodyAlt" color="violet60">
            {source}
          </Text>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Text
              variant={mobile ? 'subtitle' : 'title'}
              marginB={16}
              color="violet80"
            >
              {title}
            </Text>
          </a>
          <S.Description>{description}</S.Description>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button>Read More</Button>
          </a>
        </div>
      </S.MainNews>
    </Container>
  );
};

export default MainNews;
