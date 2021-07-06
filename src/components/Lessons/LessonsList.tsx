import React from 'react';
import { Element } from 'react-scroll';
import { graphql, useStaticQuery, Link } from 'gatsby';
import * as S from './styles';
import { GatsbyImage } from 'gatsby-plugin-image';
import Text from 'components/UI/Text';
import Button from 'components/UI/Button';

const LessonsList = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___number] }) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              number
              description
              soon
              thumbImage {
                childImageSharp {
                  gatsbyImageData(width: 400, layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
    }
  `);
  const { allMarkdownRemark } = data;
  const renderLesson = ({ node }: any) => {
    const { frontmatter, id } = node;
    const { title, number, soon, description, path, thumbImage } = frontmatter;
    return (
      <S.LessonCard key={id}>
        <div>
          <GatsbyImage
            alt=""
            image={thumbImage.childImageSharp.gatsbyImageData}
          />
        </div>
        <div>
          <Text variant="subtitle" color="violet90">
            Lesson #{number}
          </Text>
          <Text>{title}</Text>
          <Text variant="smallBody" marginB={24}>
            {description}
          </Text>
          {!soon && (
            <Link to={path}>
              <Button>Earn VID</Button>
            </Link>
          )}
        </div>
      </S.LessonCard>
    );
  };
  return (
    <Element name="lessons">
      <Text variant="title">VideoCoin Network Lessons</Text>
      <Text>
        Watch videos and read blogs to start learning about the VideoCoin
        <br />
        Network Each lesson takes just a few minutes to complete
      </Text>
      <S.LessonsList>{allMarkdownRemark.edges.map(renderLesson)}</S.LessonsList>
    </Element>
  );
};

export default LessonsList;
