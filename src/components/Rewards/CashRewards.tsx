import React from 'react';
import Section from 'components/Section';
import { Typography } from 'ui-kit';
import { Title } from './styles';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Disclaimer from 'components/Rewards/Disclaimer';
import { useTranslation } from 'react-i18next';

const CashRewards = () => {
  const { t } = useTranslation('rewards');
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "cashRewards.png" }) {
        childImageSharp {
          fixed(width: 329, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Section light reverse>
      <div>
        <Img fixed={data.file.childImageSharp.fixed} />
      </div>
      <div>
        <Title>{t('Rewards in cash or VID')}</Title>
        <Typography type="bodyThin">
          {t(
            'VideoCoin is the first and only project to reward workers and delegators with flexible options of cash rewards and VID'
          )}
          *.
        </Typography>
      </div>
      <Disclaimer />
    </Section>
  );
};

export default CashRewards;
