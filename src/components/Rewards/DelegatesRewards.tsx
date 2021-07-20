import React from 'react';
import { List, Section } from './styles';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Disclaimer from 'components/Rewards/Disclaimer';
import MainBlock from 'components/MainBlock';
import Text from 'components/UI/Text';

const DelegatesRewards = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "delegateRewards.png" }) {
        childImageSharp {
          gatsbyImageData(width: 292, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <MainBlock
      background="white20"
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
          <Text variant="title">20% In Cash Rewards To Delegates</Text>
          <Text>
            Delegates receive a minimum 20% of workers cash earned for a job
            completed.
          </Text>
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

export default DelegatesRewards;
