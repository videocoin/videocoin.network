import React, { ChangeEvent, useState } from 'react';
import {
  Root,
  Img,
  Payment1,
  Payment2,
  Payment3,
  Features,
  FeatureTitle,
  FeaturePayment,
  Inner,
  FeatureTop,
} from './styles';
import hero from '../assets/hero.png';
import hero2x from '../assets/hero@2x.png';
import heroMd from '../assets/hero_md.png';
import heroMd2x from '../assets/hero_md@2x.png';
import heroSm from '../assets/hero_sm.png';
import heroSm2x from '../assets/hero_sm@2x.png';
import creditCard from '../assets/creditCard.svg';
import dollar from '../assets/dollar.svg';
import Container from 'styles/Container';
import Disclaimer from 'components/Rewards/Disclaimer';
import Text from 'components/UI/Text';

const RewardsHero = () => {
  const [value, setValue] = useState(1000);
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(+e.target.value);
  return (
    <Root>
      <Container>
        <Text uppercase variant="title2" color="violet50" align="center">
          VideoCoin Network
        </Text>
        <Text variant="display1" align="center">
          The Future Of Blockchain Staking
        </Text>

        <Inner>
          <Img>
            <Payment1>${value}</Payment1>
            <Payment2>${(value * 0.8).toFixed()}</Payment2>
            <Payment3>${(value * 0.16).toFixed()}</Payment3>
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={`${heroSm}, ${heroSm2x} 2x`}
              />
              <source
                media="(max-width: 1024px)"
                srcSet={`${heroMd}, ${heroMd2x} 2x`}
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
                <Text variant="smallBodyAlt" color="violet80">
                  Cash Payment Calculator
                </Text>
              </FeatureTitle>
              <Text as="p" variant="caption">
                First and only project to make customer payments easy by
                directly taking credit card payments.
              </Text>
            </li>
            <li>
              <FeatureTop>
                <img src={creditCard} alt="" />
                <div>$</div>
                <span>{value}</span>
              </FeatureTop>
              <FeatureTitle>
                <Text variant="smallBodyAlt" color="violet80">
                  Passes through the VideoCoin Network
                </Text>
              </FeatureTitle>
            </li>
            <li>
              <FeatureTop>
                <img width={102} src={dollar} alt="" />
                <div>$</div>
                <span>{(value * 0.16).toFixed()}</span>
              </FeatureTop>
              <Text variant="smallBodyAlt" color="violet90" marginB={16}>
                Workers Rewarded 80%
              </Text>
              <Text as="p" variant="caption">
                First and only project to give workers the choice to receive
                rewards in cash or VID.
              </Text>
            </li>
            <li>
              <FeatureTop>
                <img width={102} src={dollar} alt="" />
                <div>$</div>
                <span>{(value * 0.8).toFixed()}</span>
              </FeatureTop>
              <Text variant="smallBodyAlt" color="violet90" marginB={16}>
                Delegators Rewarded 20% min.
              </Text>
              <Text as="p" variant="caption">
                First and only project to give delegators the choice to receive
                rewards in cash or VID.
              </Text>
            </li>
          </Features>
        </Inner>
      </Container>
    </Root>
  );
};

export default RewardsHero;
