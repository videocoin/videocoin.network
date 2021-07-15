import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Text from 'components/UI/Text';
import Button from 'components/UI/Button';
import View from 'components/View';

const CashBased = () => {
  const data = useStaticQuery(graphql`
    {
      cash: file(relativePath: { eq: "cashStaking.png" }) {
        childImageSharp {
          gatsbyImageData(width: 307, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <Link to="/worker-staking">
      <View marginB={20}>
        <GatsbyImage alt="" image={data.cash.childImageSharp.gatsbyImageData} />
      </View>
      <Text variant="title2" color="violet80" marginB={4}>
        Cash-Based Staking
      </Text>
      <Text color="grey70_72" marginB={20}>
        Earn cash rewards by staking directly with Workers on the VideoCoin
        Network.
      </Text>
      <div>
        <Button>Cash-Based Staking</Button>
      </div>
    </Link>
  );
};

export default CashBased;
