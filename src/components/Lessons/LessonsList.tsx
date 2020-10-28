import React from 'react';
import { Typography, Button } from 'ui-kit';
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import { graphql, useStaticQuery, Link } from 'gatsby';
import * as S from './styles';

const LessonsList = () => {
  const { t } = useTranslation('lessons');
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___number] }) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              number
              description
            }
          }
        }
      }
    }
  `);
  const { allMarkdownRemark } = data;
  const renderLesson = ({ node }: any) => {
    const { frontmatter, id } = node;
    const { title, number, description, path } = frontmatter;
    return (
      <S.LessonCard key={id}>
        <div>
          <img src="http://placehold.it/400x250" alt={title} />
        </div>
        <div>
          <Typography type="subtitle">
            {t('Lesson')} #{number}
          </Typography>
          <Typography type="smallTitle">{title}</Typography>
          <Typography>{description}</Typography>
          <Link to={path}>
            <Button>{t('Earn VID')}</Button>
          </Link>
        </div>
      </S.LessonCard>
    );
  };
  return (
    <Element name="lessons">
      <Typography type="title">{t('VideoCoin Network Lessons')}</Typography>
      <Typography type="subtitleThin">
        {t(
          'Watch Videos and read blogs to start learning about the VideoCoin Network'
        )}
        {t('Each lesson takes just a few minutes to complete')}
      </Typography>
      <S.LessonsList>{allMarkdownRemark.edges.map(renderLesson)}</S.LessonsList>
    </Element>
  );
};

export default LessonsList;
