import React from 'react';
import Section from 'components/Section';
import { Typography } from 'ui-kit';
import { Title, List } from './styles';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Disclaimer from 'components/Rewards/Disclaimer';

const WorkersRewards = () => {
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
        <Title>80% In Cash Rewards for Workers</Title>
        <Typography type="bodyThin">
          Worker Nodes earn up to 80% of fees from a completed job.
        </Typography>
        <List>
          <li>
            Industry First:
            <br />
            Choose how you get rewarded: Cash or VID*.
          </li>
        </List>
      </div>
      <Disclaimer />
    </Section>
  );
};

export default WorkersRewards;
