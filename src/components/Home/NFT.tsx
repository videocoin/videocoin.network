import React from 'react';
import * as S from './styles';
import Container from 'styles/Container';
import MainBlock from 'components/MainBlock';
import Text from 'components/UI/Text';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, Link, useStaticQuery } from 'gatsby';
import View from 'components/View';
import { useBreakpoint } from 'components/BrealpointProvider';
import styled from 'styled-components';
import Card from 'components/Card';
import feat1Icon from './assets/feat1.png';
import feat2Icon from './assets/feat2.png';
import feat3Icon from './assets/feat3.png';
import feat4Icon from './assets/feat4.png';
import feat5Icon from './assets/feat5.png';
const Section = styled.div`
  padding: 24px 0;
`;

const NFT = () => {
  const { mobile } = useBreakpoint();
  const data = useStaticQuery(graphql`
    {
      image1: file(relativePath: { eq: "block_1_image.png" }) {
        childImageSharp {
          gatsbyImageData(width: 519, quality: 100, layout: CONSTRAINED)
        }
      }
      image2: file(relativePath: { eq: "block_2_image.png" }) {
        childImageSharp {
          gatsbyImageData(width: 519, quality: 100, layout: CONSTRAINED)
        }
      }
      image3: file(relativePath: { eq: "block_3_image.png" }) {
        childImageSharp {
          gatsbyImageData(width: 519, quality: 100, layout: CONSTRAINED)
        }
      }
      icon: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 56, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <S.NftRoot>
      <Container>
        <View centerV row centerH column={mobile}>
          <GatsbyImage
            alt=""
            image={data.icon.childImageSharp.gatsbyImageData}
          />
          <Text paddingT={7} marginL={mobile ? 0 : 36} variant="display3">
            NFT
            <S.Plus>+</S.Plus> Technology
          </Text>
        </View>
      </Container>
      <MainBlock
        reverse
        left={
          <Section>
            <GatsbyImage
              alt=""
              image={data.image1.childImageSharp.gatsbyImageData}
            />
          </Section>
        }
        right={
          <>
            <Text variant="subtitle" withGradient uppercase>
              NFTs reimagined
            </Text>
            <Text variant="title" marginB={16} color="violet80">
              Build complete media experiences
            </Text>
            <Text color="grey70_72" marginB={48}>
              VideoCoin’s enhanced <strong>NFT+</strong> format transforms NFTs
              from mere single asset digital collectibles to dynamic containers
              holding any number of media elements, of any type.
            </Text>
          </>
        }
      />
      <MainBlock
        left={
          <Section>
            <GatsbyImage
              alt=""
              image={data.image2.childImageSharp.gatsbyImageData}
            />
          </Section>
        }
        right={
          <>
            <Text variant="subtitle" withGradient uppercase>
              Rapid deployment
            </Text>
            <Text variant="title" marginB={16} color="violet80">
              Your own NFT marketplace in 15 minutes
            </Text>
            <Text color="grey70_72" marginB={48}>
              With our installer, you can launch a fully powered NFT storefront
              in no time. Now any content creator, brand, retailer, or content
              platform can mint, sell, and auction NFTs, and more – a white
              label, full stack integrated toolkit that saves you nearly a year
              of development time and resources.
            </Text>
          </>
        }
      />
      <MainBlock
        reverse
        left={
          <Section>
            <GatsbyImage
              alt=""
              image={data.image3.childImageSharp.gatsbyImageData}
            />
          </Section>
        }
        right={
          <>
            <Text variant="subtitle" withGradient uppercase>
              Any media type
            </Text>
            <Text variant="title" marginB={16} color="violet80">
              If it’s media, we can make it an NFT
            </Text>
            <Text color="grey70_72" marginB={48}>
              Our expansive <strong>NFT+</strong> format has unique
              capabilities, and supports any media type: video, JPEG, PNG, VR,
              3D Blender, MP3, PDF, you name it…
            </Text>
          </>
        }
      />
      <Container>
        <View row centerH>
          <Text align="center" variant="subtitle" withGradient uppercase>
            Advanced features
          </Text>
        </View>
        <Text align="center" variant="title" marginB={16}>
          NFT<S.Plus>+</S.Plus> advantages
        </Text>
        <S.Features>
          <Card>
            <img src={feat1Icon} width={40} height={40} alt="" />
            <Text variant="bodyAlt" color="violet70" marginT={8}>
              Multi-Asset
            </Text>
            <Text variant="smallBody">
              No longer are NFTs limited to a single piece of media. VideoCoin’s{' '}
              <strong>NFT+</strong> containers can hold multiple media assets -
              all at once.
            </Text>
          </Card>
          <Card>
            <img src={feat2Icon} width={40} height={40} alt="" />
            <Text variant="bodyAlt" color="violet70" marginT={8}>
              Flexible Rights Management
            </Text>
            <Text variant="smallBody">
              Each media asset in an <strong>NFT+</strong> can have its own
              permissions, giving you granular control over how and when the
              media unlocks.
            </Text>
          </Card>
          <Card>
            <img src={feat3Icon} width={40} height={40} alt="" />
            <Text variant="bodyAlt" color="violet70" marginT={8}>
              Updateable
            </Text>
            <Text variant="smallBody">
              Easily and continuously add more media to any{' '}
              <strong>NFT+</strong> after it’s been minted, or even sold.
            </Text>
          </Card>
          <Card>
            <img src={feat4Icon} width={40} height={40} alt="" />
            <Text variant="bodyAlt" color="violet70" marginT={8}>
              Video-Optimized
            </Text>
            <Text variant="smallBody">
              Decentralized video processing on our native blockchain
              significantly reduces the cost of encoding, transcoding,
              distribution, and storage.
            </Text>
          </Card>
          <Card>
            <img src={feat5Icon} width={40} height={40} alt="" />
            <Text variant="bodyAlt" color="violet70" marginT={8}>
              Resilience & Longevity
            </Text>
            <Text variant="smallBody">
              Each <strong>NFT+</strong> is encrypted with a private key
              immutably linking NFT data and each asset to its location on
              Filecoin, for long-term durability.
            </Text>
          </Card>
        </S.Features>
      </Container>
      <Container>
        <View marginT={24} marginB={-18}>
          <Text variant="subtitle" withGradient uppercase as="span">
            More UNIQUE features
          </Text>
        </View>
        <S.Features>
          <div>
            <Text variant="title" marginB={16} color="violet80">
              No crypto.
            </Text>
            <Text variant="smallBody">
              Our solution is integrated with Public Mint to enable payment in
              credit card, wire, and ACH. No need to own crypto or understand
              the world of crypto.
            </Text>
          </div>
          <div>
            <Text variant="title" marginB={16} color="violet80">
              Ecofriendly.
            </Text>
            <Text variant="smallBody">
              VideoCoin Network’s Proof-of-Stake system ensures our Workers are
              up to 1000x more efficient than Bitcoin miners, dramatically
              lowering environmental impact.
            </Text>
          </div>
          <div>
            <Text variant="title" marginB={16} color="violet80">
              Compatible.
            </Text>
            <Text variant="smallBody">
              No walled gardens here. Our NFTs can work on any ETH-compatible
              chain.
            </Text>
          </div>
        </S.Features>
      </Container>
    </S.NftRoot>
  );
};

export default NFT;
