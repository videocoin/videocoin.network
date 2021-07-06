import React from 'react';
import { Link, CardItem } from './styles';
import { useTranslation } from 'react-i18next';
import Text from 'components/UI/Text';
import View from 'components/View';
import Card from 'components/Card';
import { TColors } from 'styles/Colors';

export interface ICard {
  title: string;
  link: string;
  color: TColors;
  light: boolean;
}

const TutorialCard = ({ card }: { card: ICard }) => {
  const { title, light, link, color } = card;
  const { t } = useTranslation('developers');
  return (
    <CardItem>
      <Card color={color}>
        <Text variant="subtitle" color={light ? 'violet10' : 'violet80'}>
          {t(title)}
        </Text>
        <Link href={link} light={light}>
          <View row centerV>
            <Text variant="smallBodyAlt" color={light ? 'white0' : 'violet80'}>
              Begin tutorial
            </Text>
            <div className="arrow" />
          </View>
        </Link>
      </Card>
    </CardItem>
  );
};

export default TutorialCard;
