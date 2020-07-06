import React from 'react';
import { Typography } from 'ui-kit';
import { Root, SLink, Img, Title } from './styles';
import { useTranslation } from 'react-i18next';

const FooterCard = (props: {
  img: string;
  title: string;
  desc: string;
  buttonText: string;
  path: string;
}) => {
  const { t } = useTranslation();
  const { img, title, desc, buttonText, path } = props;
  return (
    <Root>
      <Img>
        <img src={img} alt="" />
      </Img>
      <Title type="subtitle" theme="white">
        {t(title)}
      </Title>
      <Typography type="smallBodyThin" opacity="drift" theme="white">
        {t(desc)}
      </Typography>
      <SLink to={path}>{t(buttonText)}</SLink>
    </Root>
  );
};

export default FooterCard;
