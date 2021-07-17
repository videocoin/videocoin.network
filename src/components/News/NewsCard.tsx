import React from 'react';
import * as S from './styles';
import Text from 'components/UI/Text';
import Button from 'components/UI/Button';
const NewsCard = ({ item }) => {
  const { cover, link, source, title, date } = item;
  return (
    <S.NewsCard>
      <div>
        <img src={cover} alt="" />
      </div>
      <div>
        <Text variant="caption" color="orange60">
          {date}
        </Text>
        <Text variant="smallBodyAlt" color="violet60">
          {source}
        </Text>
        <Text variant="subtitle" marginB={16} color="violet80">
          {title}
        </Text>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button>Read more</Button>
        </a>
      </div>
    </S.NewsCard>
  );
};

export default NewsCard;
