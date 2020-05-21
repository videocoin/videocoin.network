import React from 'react';
import Section from 'components/Section';
import { Typography } from 'ui-kit';
import { List, Title } from './styles';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const DelegatesRewards = () => {
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
        <Title>20% In Cash Rewards To Delegates</Title>
        <Typography type="bodyThin">
          Delegates receive a minimum 20% of worker's cash earned for a job
          completed.
        </Typography>
        <List>
          <li>
            Industry First:
            <br />
            Choose how you get rewarded: Cash or VID.
          </li>
        </List>
      </div>
    </Section>
  );
};

export default DelegatesRewards;
