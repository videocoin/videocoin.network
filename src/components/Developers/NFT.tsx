import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Text from 'components/UI/Text';
import MainBlock from 'components/MainBlock';

const NFT = () => {
  const data = useStaticQuery(graphql`
    {
      orbital: file(relativePath: { eq: "developersNFT.png" }) {
        childImageSharp {
          gatsbyImageData(width: 498, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <MainBlock
      background="white10"
      left={
        <GatsbyImage
          alt=""
          image={data.orbital.childImageSharp.gatsbyImageData}
        />
      }
      right={
        <>
          <Text variant="subtitle" withGradient>
            Video NFTs. Done right.
          </Text>
          <Text variant="title" marginB={16}>
            Implement Resilient
            <br />
            Video NFT Apps Effortlessly
          </Text>
          <Text color="grey70_72" marginB={48}>
            Our integration with Filecoin takes this a step further to deliver
            the only <strong>platform optimized</strong> for Video NFTs. Our
            pioneering “Proof of Ownership” solution creates a{' '}
            <strong>unique cryptographic signature</strong> for each asset,
            ensuring a secure and provable link between the NFT and its
            underlying media – solving difficult technical issues inherent to
            most NFT implementations.
            <br />
            <br />
            Our expanded metadata further allows linking of unlimited related
            media assets to the same NFT. And by storing on Filecoin’s vast
            decentralized storage ecosystem, our solution secures both your NFT
            and all its linked assets – forever.
          </Text>
        </>
      }
    />
  );
};

export default NFT;
