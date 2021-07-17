import React from 'react';
import { Root, Btns } from './styles';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import token from 'icons/token.svg';
import View from 'components/View';
import Text from 'components/UI/Text';
import Button from 'components/UI/Button';
import Container from 'styles/Container';
import { useBreakpoint } from 'components/BrealpointProvider';
const TokenHero = () => {
  const { mobile, tablet } = useBreakpoint();
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "tokenHero.png" }) {
        childImageSharp {
          gatsbyImageData(width: 412, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <Root>
      <Container>
        <div>
          <div>
            <GatsbyImage
              alt=""
              image={data.file.childImageSharp.gatsbyImageData}
            />
          </div>
          <div>
            <View row column={mobile} centerV centerH={tablet} marginB={10}>
              <View marginR={mobile ? 0 : 16}>
                <img src={token} width={36} height={36} alt="" />
              </View>
              <Text variant="subtitle" withGradient uppercase>
                VideoCoin Tokenomics
              </Text>
            </View>
            <Text variant="display2">
              VideoCoin Network is powered by the VID token.
            </Text>
            <Text variant="subtitle" color="violet80" marginB={36}>
              VID tokens enable network functionality and ensure its stability
              and efficiency.
            </Text>
            <Text variant="caption">
              *Issued by the VideoCoin Development Association Ltd. (VDA), VID
              tokens were initially offered to early project contributors in a
              presale beginning in 2017. Contributors seeking the terms and
              conditions of the VDA presale may access them{' '}
              <a
                href="https://storage.googleapis.com/videocoin-network-policies/VideoCoinNetworkTermsofService.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </Text>
          </div>
        </div>
      </Container>
    </Root>
  );
};

export default TokenHero;
