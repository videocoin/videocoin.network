import React from 'react';
import Section from 'components/Section';
import { Typography } from 'ui-kit';
import { Title, List } from './styles';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Disclaimer from 'components/Rewards/Disclaimer';
import { useTranslation } from 'react-i18next';

const WorkersRewards = () => {
  const { t } = useTranslation('rewards');

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "workersRewards.png" }) {
        childImageSharp {
          fixed(width: 328, quality: 100) {
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
        <Title>{t('80% In Cash Rewards for Workers')}</Title>
        <Typography type="bodyThin">
          {t('Worker Nodes earn up to 80% of fees from a completed job')}
        </Typography>
        <List>
          <li>
            {t('Industry First')}:
            <br />
            {t('Choose how you get rewarded')}: {t('Cash or VID')}*.
          </li>
        </List>
      </div>
      <Disclaimer />
    </Section>
  );
};

export default WorkersRewards;
