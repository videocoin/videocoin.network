import React from 'react';
import { Root, Inner, Left, Right, Subtitle, Title } from './styles';
import { MarketingButton } from 'ui-kit/*';
import Container from 'styles/Container';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { useTranslation, Trans } from 'react-i18next';

const StakersHero = () => {
  const { t } = useTranslation('staking');
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "cashStaking.png" }) {
        childImageSharp {
          fixed(width: 680, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Root>
      <Container>
        <Inner>
          <Left>
            <Img fixed={data.file.childImageSharp.fixed} />
          </Left>
          <Right>
            <Subtitle type="subtitleCaps">
              <Trans t={t} i18nKey="Delegated staking on videocoin network">
                <span>Delegated staking</span> on videocoin network
              </Trans>
            </Subtitle>
            <Title type="display3" theme="white">
              {t('Stake your VideoCoin tokens to earn cash rewards')}
            </Title>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://console.videocoin.network/sign-up?role=publisher"
            >
              <MarketingButton>{t('Get Started')}</MarketingButton>
            </a>
          </Right>
        </Inner>
      </Container>
    </Root>
  );
};

export default StakersHero;
