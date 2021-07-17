import React from 'react';
import Container from 'styles/Container';
import * as S from './styles';
import Button from 'components/UI/Button';
import Text from 'components/UI/Text';
import news from '../../news';
import { useBreakpoint } from 'components/BrealpointProvider';

const MainNews = () => {
  const { mobile } = useBreakpoint();
  const { cover, date, source, link, title } = news[0];
  return (
    <Container>
      <S.MainNews>
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
          <Text
            variant={mobile ? 'subtitle' : 'title'}
            marginB={16}
            color="violet80"
          >
            {title}
          </Text>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button>Read More</Button>
          </a>
        </div>
      </S.MainNews>
    </Container>
  );
};

export default MainNews;
