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
  Inner,
  FeatureTop,
} from './styles';
import { Typography } from 'ui-kit';
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
import { useTranslation, Trans } from 'react-i18next';

const RewardsHero = () => {
  const { t } = useTranslation('rewards');
  const [value, setValue] = useState(1000);
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(+e.target.value);
  return (
    <Root>
      <Container>
        <Subtitle>
          <div>
            <Trans t={t} i18nKey="Videoсoin network rewards">
              VideoCoin Network <span>Rewards</span>
            </Trans>
          </div>
        </Subtitle>
        <Title>{t('The Future Of Blockchain Staking')}</Title>
        <Typography type="display4" theme="white" align="center">
          {t('Earn Rewards in Cash')}
        </Typography>
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
                <span>{t('cash payment calculator')}</span>
              </FeatureTitle>
              <p>
                {t(
                  'First and only project to make customer payments easy by directly taking credit card payments'
                )}
              </p>
            </li>
            <li>
              <FeatureTop>
                <img src={creditCard} alt="" />
                <div>$</div>
                <span>{value}</span>
              </FeatureTop>
              <FeatureTitle>
                {t('Passes through the VideoCoin Network')}
              </FeatureTitle>
            </li>
            <li>
              <FeatureTop>
                <img width={102} src={dollar} alt="" />
                <div>$</div>
                <span>{(value * 0.16).toFixed()}</span>
              </FeatureTop>
              <FeatureTitle>{t('Workers Rewarded 80%')}</FeatureTitle>
              <p>
                {t(
                  'First and only project to give workers the choice to receive rewards in cash or VID'
                )}
              </p>
            </li>
            <li>
              <FeatureTop>
                <img width={102} src={dollar} alt="" />
                <div>$</div>
                <span>{(value * 0.8).toFixed()}</span>
              </FeatureTop>
              <FeatureTitle>{t('Delegators Rewarded 20% min')}</FeatureTitle>
              <p>
                {t(
                  'First and only project to give delegators the choice to receive rewards in cash or VID'
                )}
              </p>
            </li>
          </Features>
        </Inner>
      </Container>
      <Disclaimer />
    </Root>
  );
};

export default RewardsHero;
