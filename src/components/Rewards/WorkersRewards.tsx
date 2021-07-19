import React from 'react';
import { List, Section } from './styles';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import MainBlock from 'components/MainBlock';
import Text from 'components/UI/Text';

const WorkersRewards = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "workersRewards.png" }) {
        childImageSharp {
          gatsbyImageData(width: 398, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <MainBlock
      reverse
      left={
        <Section>
          <GatsbyImage
            alt=""
            image={data.file.childImageSharp.gatsbyImageData}
          />
        </Section>
      }
      right={
        <>
          <Text variant="title" marginB={16}>
            80% In Cash <br /> Rewards for Workers
          </Text>
          <Text>Worker Nodes earn up to 80% of fees from a completed job.</Text>
          <List>
            <li>
              <Text as="span" variant="bodyAlt" withGradient>
                Industry First
              </Text>
              <Text>Choose how you get rewarded: Cash or VID.</Text>
            </li>
          </List>
        </>
      }
    />
  );
};

export default WorkersRewards;
