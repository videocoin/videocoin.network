import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Text from 'components/UI/Text';
import Button from 'components/UI/Button';
import View from 'components/View';

const GenesisPool = () => {
  const data = useStaticQuery(graphql`
    {
      real: file(relativePath: { eq: "genesisPool.png" }) {
        childImageSharp {
          gatsbyImageData(width: 307, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <Link to="/genesis-staking">
      <View marginB={20}>
        <GatsbyImage alt="" image={data.real.childImageSharp.gatsbyImageData} />
      </View>
      <Text variant="title2" color="violet80" marginB={4}>
        Genesis Pool Staking
      </Text>
      <Text color="grey70_72" marginB={20}>
        Earn VID rewards by staking your VID into worker pools with our simple
        to use staking app.
      </Text>
      <div>
        <Button>Genesis Pool Staking</Button>
      </div>
    </Link>
  );
};

export default GenesisPool;
