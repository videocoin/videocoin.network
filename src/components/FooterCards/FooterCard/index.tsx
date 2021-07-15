import React from 'react';
import * as S from './styles';
import Text from 'components/UI/Text';
import { Link } from 'gatsby';
import Button from 'components/UI/Button';

const FooterCard = (props: {
  img: string;
  title: string;
  desc: string;
  buttonText: string;
  path: string;
}) => {
  const { img, title, desc, buttonText, path } = props;
  return (
    <S.Root>
      <S.Img>
        <img width="56" height="56" src={img} alt="" />
      </S.Img>
      <Text marginB={4} variant="subtitle" color="grey70">
        {title}
      </Text>
      <Text marginB={32} paddingH={2} variant="body">
        {desc}
      </Text>
      <Link to={path}>
        <Button>{buttonText}</Button>
      </Link>
    </S.Root>
  );
};

export default FooterCard;
