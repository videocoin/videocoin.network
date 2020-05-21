import React from 'react';
import { Typography } from 'ui-kit';
import { Root, SLink, Img, Title } from './styles';

const FooterCard = (props: {
  img: string;
  title: string;
  desc: string;
  buttonText: string;
  path: string;
}) => {
  const { img, title, desc, buttonText, path } = props;
  return (
    <Root>
      <Img>
        <img src={img} alt="" />
      </Img>
      <Title type="subtitle" theme="white">
        {title}
      </Title>
      <Typography type="smallBodyThin" opacity="drift" theme="white">
        {desc}
      </Typography>
      <SLink to={path}>{buttonText}</SLink>
    </Root>
  );
};

export default FooterCard;
