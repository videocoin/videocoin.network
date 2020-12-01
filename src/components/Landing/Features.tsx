import React from 'react';
import cost from './assets/Cost.svg';
import privacy from './assets/Privacy.svg';
import scaleable from './assets/Scaleable.svg';
import * as S from './styles';
import View from 'components/View';
import { useBreakpoint } from 'components/BrealpointProvider';

const features = [
  {
    image: cost,
    title: 'Dramatically Lower Cost',
    description:
      '50-70% less than existing encoding, live transcoding, and storage services',
  },
  {
    image: privacy,
    title: 'Secure & Private',
    description:
      'You control your data via encryption and decentralized architecture',
  },
  {
    image: scaleable,
    title: 'Unconstrained and Scalable',
    description:
      'Flexible, distributed network encourages innovation via open-source API',
  },
];

const Features = () => {
  const { tablet } = useBreakpoint();
  const renderFeatureCard = (
    { image, title, description }: any,
    idx: number
  ) => (
    <S.FeatureCard key={idx}>
      <div>
        <img src={image} alt="" />
      </div>
      <div>{title}</div>
      <div>{description}</div>
    </S.FeatureCard>
  );
  return (
    <S.Container>
      <View row={!tablet} column={tablet} centerH marginB={136}>
        {features.map(renderFeatureCard)}
      </View>
    </S.Container>
  );
};

export default Features;
