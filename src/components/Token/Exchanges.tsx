import React from 'react';
import MainBlock from 'components/MainBlock';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Text from 'components/UI/Text';
import View from 'components/View';
import Button from 'components/UI/Button';
import bittrex from './assets/bittrex.png';
import kucoin from './assets/kucoin.svg';
import uni from './assets/uni.svg';
import { useBreakpoint } from 'components/BrealpointProvider';

const Exchanges = () => {
  const { mobile } = useBreakpoint();
  const data = useStaticQuery(graphql`
    {
      orbital: file(relativePath: { eq: "exchanges.png" }) {
        childImageSharp {
          gatsbyImageData(width: 519, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <MainBlock
      left={
        <View paddingV={20}>
          <GatsbyImage
            alt=""
            image={data.orbital.childImageSharp.gatsbyImageData}
          />
        </View>
      }
      right={
        <>
          <Text variant="subtitle" withGradient>
            Help Power the VideoCoin Network
          </Text>
          <Text variant="title" marginB={16}>
            Acquire VID Token <br /> From These Exchanges
          </Text>
          <View row column={mobile} marginB={16}>
            <View marginB={mobile ? 12 : 0}>
              <a
                href="https://global.bittrex.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button btnTheme="secondary" hideArrow>
                  <View row centerV>
                    <img src={bittrex} width={24} height={24} alt="" />
                    <View marginL={8}>Bittrex</View>
                  </View>
                </Button>
              </a>
            </View>
            <View marginL={mobile ? 0 : 12} marginB={mobile ? 12 : 0}>
              <a
                href="https://www.kucoin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button btnTheme="secondary" hideArrow>
                  <View row centerV>
                    <img src={kucoin} width={24} height={24} alt="" />
                    <View marginL={8}>KuCoin</View>
                  </View>
                </Button>
              </a>
            </View>
            <View marginL={mobile ? 0 : 12}>
              <a
                href="https://uniswap.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button btnTheme="secondary" hideArrow>
                  <View row centerV>
                    <img src={uni} width={24} height={24} alt="" />
                    <View marginL={8}>Uniswap V2</View>
                  </View>
                </Button>
              </a>
            </View>
          </View>
          <Text color="grey70_72">
            VideoCoin is currently available as an ERC20 token. You can explore
            activity on{' '}
            <a
              href="https://etherscan.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Etherscan.io
            </a>
            .
          </Text>
        </>
      }
    />
  );
};

export default Exchanges;
