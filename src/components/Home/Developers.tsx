import React from 'react';
import * as S from './styles';
import Container from 'styles/Container';
import MainBlock from 'components/MainBlock';
import Text from 'components/UI/Text';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Card from 'components/Card';
import encodingIcon from './assets/encoding.svg';
import ecosystemIcon from './assets/ecosystem.svg';
import costIcon from './assets/cost.svg';
import originIcon from './assets/origin.svg';
import costSavingIcon from './assets/costSaving.svg';
import crossPlatformIcon from './assets/crossPlatform.svg';
import View from 'components/View';
import Join from 'components/Home/Join';
import Button from 'components/UI/Button';
import developers from 'icons/developers.svg';
import { useBreakpoint } from 'components/BrealpointProvider';

const Developers = () => {
  const { mobile } = useBreakpoint();
  const data = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "developersCode.png" }) {
        childImageSharp {
          gatsbyImageData(width: 519, quality: 100, layout: CONSTRAINED)
        }
      }
      imageNFT: file(relativePath: { eq: "developersNFT.png" }) {
        childImageSharp {
          gatsbyImageData(width: 519, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <S.Root background="white20">
      <Container>
        <View centerV row centerH column={mobile}>
          <img src={developers} width={56} height={56} alt="" />
          <Text paddingT={7} marginL={mobile ? 0 : 36} variant="display3">
            Developers
          </Text>
        </View>
      </Container>
      <MainBlock
        reverse
        left={
          <GatsbyImage
            alt=""
            image={data.imageNFT.childImageSharp.gatsbyImageData}
          />
        }
        right={
          <>
            <Text variant="subtitle" withGradient uppercase>
              Video NFTs
            </Text>
            <Text variant="title" marginB={16} color="violet80">
              Build NFTs into your app effortlessly
            </Text>
            <Text color="grey70_72" marginB={48}>
              Leverage the only solution <strong>optimized</strong> for the
              unique demands of <strong>Video NFT applications</strong> — a
              complete suite of capabilities coming soon from VideoCoin +
              Filecoin. Create your own fully functioning NFT marketplace right
              out of the box.
            </Text>
          </>
        }
      />
      <Container>
        <S.Features>
          <Card>
            <img src={originIcon} width={40} height={40} alt="" />
            <Text variant="bodyAlt" color="violet70" marginT={8}>
              Origin Proof & Longevity
            </Text>
            <Text variant="smallBody">
              Expanded metadata plus decentralized content storage secures
              ownership and assures resilience.
            </Text>
          </Card>
          <Card>
            <img src={costSavingIcon} width={40} height={40} alt="" />
            <Text variant="bodyAlt" color="violet70" marginT={8}>
              Massive cost savings
            </Text>
            <Text variant="smallBody">
              Processing on VideoCoin Network delivers NFT operations orders of
              magnitude cheaper than on Ethereum.
            </Text>
          </Card>
          <Card>
            <img src={crossPlatformIcon} width={40} height={40} alt="" />
            <Text variant="bodyAlt" color="violet70" marginT={8}>
              Cross-platform compatibility
            </Text>
            <Text variant="smallBody">
              Transactions mirrored on Ethereum to ensure interoperability with
              popular NFT apps and marketplaces.
            </Text>
          </Card>
        </S.Features>
      </Container>
      <MainBlock
        left={
          <GatsbyImage
            alt=""
            image={data.image.childImageSharp.gatsbyImageData}
          />
        }
        right={
          <>
            <Text variant="subtitle" withGradient uppercase>
              Video Processing
            </Text>
            <Text variant="title" marginB={16} color="violet80">
              Unleash robust video infrastructure with just a few lines of code
            </Text>
            <Text color="grey70_72" marginB={48}>
              VideoCoin provides <strong>efficient</strong> and{' '}
              <strong>cost-effective</strong> video processing, whether you’re
              developing for on-demand or VR or livestreaming — or something
              completely new.
            </Text>
          </>
        }
      />
      <Container>
        <Text align="center" variant="subtitle" color="violet90" marginB={12}>
          Use VideoCoin’s decentralized network <br /> of compute power to
          realize your creative vision.
        </Text>
        <S.Features>
          <Card>
            <View row>
              <img src={ecosystemIcon} width={32} height={32} alt="" />
              <Text variant="bodyAlt" color="violet70" marginL={20}>
                Open source, API-first ecosystem
              </Text>
            </View>
          </Card>
          <Card>
            <View row>
              <img src={encodingIcon} width={32} height={32} alt="" />
              <Text variant="bodyAlt" color="violet70" marginL={20}>
                Encoding, bit rate packaging, rights management
              </Text>
            </View>
          </Card>
          <Card>
            <View row>
              <img src={costIcon} width={32} height={32} alt="" />
              <Text variant="bodyAlt" color="violet70" marginL={20}>
                A fraction of the cost of others
              </Text>
            </View>
          </Card>
        </S.Features>
      </Container>

      <Join
        button={
          <Link to="/developers">
            <Button simple>Learn More</Button>
          </Link>
        }
        text={'Ignite your innovations with VideoCoin'}
      />
    </S.Root>
  );
};

export default Developers;
