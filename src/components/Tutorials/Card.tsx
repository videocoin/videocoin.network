import React from 'react';
import { Link, CardItem } from './styles';
import Text from 'components/UI/Text';
import View from 'components/View';
import Card from 'components/Card';
import { TColors } from 'styles/Colors';

export interface ICard {
  title: string;
  link: string;
  color: TColors;
  light: boolean;
  textColor?: TColors;
}

const TutorialCard = ({ card }: { card: ICard }) => {
  const { title, light, link, color, textColor } = card;
  return (
    <CardItem>
      <Card color={color}>
        <Link href={link} light={light}>
          <Text
            variant="subtitle"
            color={textColor ? textColor : light ? 'violet10' : 'violet80'}
          >
            {title}
          </Text>
          <View row centerV marginT={16} marginB={12}>
            <Text variant="smallBodyAlt" color={light ? 'white0' : 'violet80'}>
              Begin Tutorial
            </Text>
            <div className="arrow" />
          </View>
        </Link>
      </Card>
    </CardItem>
  );
};

export default TutorialCard;
