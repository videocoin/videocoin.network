import React from 'react';
import * as S from './styles';
import Text from 'components/UI/Text';
import Button from 'components/UI/Button';
import { GatsbyImage } from 'gatsby-plugin-image';

const NewsCard = ({ item }) => {
  const { cover, link, source, title, date, description } = item;
  return (
    <S.NewsCard>
      <div>
        <GatsbyImage image={cover} alt="" />
      </div>
      <div>
        <Text variant="caption" color="orange60">
          {date}
        </Text>
        <Text variant="smallBodyAlt" color="violet60">
          {source}
        </Text>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Text variant="subtitle" marginB={16} color="violet80">
            {title}
          </Text>
        </a>
        <S.Description variant="smallBody">{description}</S.Description>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button>Read more</Button>
        </a>
      </div>
    </S.NewsCard>
  );
};

export default NewsCard;
