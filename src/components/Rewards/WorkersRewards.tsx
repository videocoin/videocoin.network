import React from 'react';
import { List } from './styles';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Disclaimer from 'components/Rewards/Disclaimer';
import MainBlock from 'components/MainBlock';
import Text from 'components/UI/Text';

const WorkersRewards = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "workersRewards.png" }) {
        childImageSharp {
          gatsbyImageData(width: 328, quality: 100, layout: FIXED)
        }
      }
    }
  `);

  return (
    <MainBlock
      reverse
      left={
        <GatsbyImage alt="" image={data.file.childImageSharp.gatsbyImageData} />
      }
      right={
        <>
          <Text variant="title" marginB={16}>
            80% In Cash <br /> Rewards for Workers
          </Text>
          <Text>Worker Nodes earn up to 80% of fees from a completed job</Text>
          <List>
            <li>
              <Text variant="bodyAlt" withGradient>
                Industry First
              </Text>
              <Text>Choose how you get rewarded: Cash or VID*.</Text>
            </li>
          </List>
          <Disclaimer />
        </>
      }
    />
  );
};

export default WorkersRewards;
