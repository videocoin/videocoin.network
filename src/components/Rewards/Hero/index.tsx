import React, { ChangeEvent, useState } from 'react';
import {
  Subtitle,
  Title,
  Root,
  Img,
  Payment1,
  Payment2,
  Payment3,
  Features,
  FeatureTitle,
  FeaturePayment,
} from './styles';
import { Typography } from 'ui-kit';
import hero from '../assets/hero.png';
import hero2x from '../assets/hero@2x.png';
import heroMd from '../assets/hero_md.png';
import heroMd2x from '../assets/hero_md@2x.png';
import heroSm from '../assets/hero_sm.png';
import heroSm2x from '../assets/hero_sm@2x.png';
import creditCard from '../assets/creditCard.svg';
import Container from 'styles/Container';
const RewardsHero = () => {
  const [value, setValue] = useState(1000);
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(+e.target.value);
  return (
    <Root>
      <Container>
        <Subtitle>
          VideoCoin Network <span>Rewards</span>
        </Subtitle>
        <Title>The Future Of Blockchain Staking</Title>
        <Typography type="display4" theme="white" align="center">
          Earn Rewards in Cash
        </Typography>
        <Img>
          <Payment1>${value}</Payment1>
          <Payment2>${(value * 0.8).toFixed()}</Payment2>
          <Payment3>${(value * 0.16).toFixed()}</Payment3>
          <picture>
            <source
              media="(max-width: 767px)"
              src={heroSm}
              srcSet={`${heroSm2x} 2x`}
            />
            <source
              media="(max-width: 1024px)"
              src={heroMd}
              srcSet={`${heroMd2x} 2x`}
            />
            <img src={hero} srcSet={`${hero2x} 2x`} alt="" />
          </picture>
        </Img>
        <Features>
          <li>
            <FeatureTitle>
              <FeaturePayment>
                <img src={creditCard} alt="" />
                <div>$</div>
                <input type="number" value={value} onChange={onChange} />
              </FeaturePayment>
              <span>cash payment calculator</span>
            </FeatureTitle>
            <p>
              First and only project to make customer payments easy by directly
              taking credit card payments.
            </p>
          </li>
          <li>
            <FeatureTitle>Workers Rewarded 80%</FeatureTitle>
            <p>
              First and only project to give workers the choice to receive
              rewards in cash or VID.
            </p>
          </li>
          <li>
            <FeatureTitle>Delegators Rewarded 20% min.</FeatureTitle>
            <p>
              First and only project to give delegators the choice to receive
              rewards in cash or VID.
            </p>
          </li>
        </Features>
      </Container>
    </Root>
  );
};

export default RewardsHero;
