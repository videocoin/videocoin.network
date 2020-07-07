import React from 'react';
import Section from 'components/Section';
import { Typography } from 'ui-kit';
import { List, Title } from './styles';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Disclaimer from 'components/Rewards/Disclaimer';
import { useTranslation } from 'react-i18next';

const DelegatesRewards = () => {
  const { t } = useTranslation('rewards');
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "delegateRewards.png" }) {
        childImageSharp {
          fixed(width: 292, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Section>
      <div>
        <Img fixed={data.file.childImageSharp.fixed} />
      </div>
      <div>
        <Title>{t('20% In Cash Rewards To Delegates')}</Title>
        <Typography type="bodyThin">
          {t(
            'Delegates receive a minimum 20% of workers cash earned for a job completed'
          )}
        </Typography>
        <List>
          <li>
            {t('Industry First')}:
            <br />
            {t('Choose how you get rewarded')}${'Cash or VID'}*.
          </li>
        </List>
      </div>
      <Disclaimer />
    </Section>
  );
};

export default DelegatesRewards;
