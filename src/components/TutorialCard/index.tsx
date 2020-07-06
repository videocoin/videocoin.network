import React from 'react';
import { Icon, Typography } from 'ui-kit';
import { Card, Link } from './styles';
import { useTranslation } from 'react-i18next';

export interface ICard {
  title: string;
  link: string;
  color: string;
  light: boolean;
}

const TutorialCard = ({ card }: { card: ICard }) => {
  const { title, light, link, color } = card;
  const { t } = useTranslation('developers');
  return (
    <Card $color={color}>
      <Typography type="display4" theme={light ? 'white' : 'dark'}>
        {t(title)}
      </Typography>
      <Link href={link}>
        <Typography type="subtitle" theme={light ? 'white' : 'dark'}>
          {t('Start Tutorial')}
        </Typography>
        <Icon
          width={16}
          height={16}
          name="arrowRight"
          color={light ? '#fff' : '#0c0417c2'}
        />
      </Link>
    </Card>
  );
};

export default TutorialCard;
