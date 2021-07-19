import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Card from 'components/Card';
import * as S from './styles';
import View from 'components/View';
import Text from 'components/UI/Text';
import partners from 'icons/partners.svg';
import decoration from 'components/MainBlock/assets/decoration.svg';
import Container from 'styles/Container';
import { useBreakpoint } from 'components/BrealpointProvider';

const Partners = () => {
  const { mobile } = useBreakpoint();
  const data = useStaticQuery(graphql`
    {
      binary: file(relativePath: { eq: "partners/binary.png" }) {
        childImageSharp {
          gatsbyImageData(width: 119, quality: 100, layout: CONSTRAINED)
        }
      }
      science: file(relativePath: { eq: "partners/science_logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 172, quality: 100, layout: CONSTRAINED)
        }
      }
      dna: file(relativePath: { eq: "partners/dna_logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 120, quality: 100, layout: CONSTRAINED)
        }
      }
      juno: file(relativePath: { eq: "partners/juno.png" }) {
        childImageSharp {
          gatsbyImageData(width: 108, quality: 100, layout: CONSTRAINED)
        }
      }
      galaxy: file(relativePath: { eq: "partners/galaxy_logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 161, quality: 100, layout: CONSTRAINED)
        }
      }
      tokenstack: file(relativePath: { eq: "partners/tokenstack_logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 111, quality: 100, layout: CONSTRAINED)
        }
      }
      arcadia: file(relativePath: { eq: "partners/arcadia_logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 229, quality: 100, layout: CONSTRAINED)
        }
      }
      alphabit: file(relativePath: { eq: "partners/alphabit_logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 161, quality: 100, layout: CONSTRAINED)
        }
      }
      lvna: file(relativePath: { eq: "partners/lvna_logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 87, quality: 100, layout: CONSTRAINED)
        }
      }
      tir: file(relativePath: { eq: "partners/tir.png" }) {
        childImageSharp {
          gatsbyImageData(width: 264, quality: 100, layout: CONSTRAINED)
        }
      }
      icapital: file(relativePath: { eq: "partners/icapital.png" }) {
        childImageSharp {
          gatsbyImageData(width: 115, quality: 100, layout: CONSTRAINED)
        }
      }
      grit: file(relativePath: { eq: "partners/grit.png" }) {
        childImageSharp {
          gatsbyImageData(width: 89, quality: 100, layout: CONSTRAINED)
        }
      }
      rengen: file(relativePath: { eq: "partners/rengen.png" }) {
        childImageSharp {
          gatsbyImageData(width: 108, quality: 100, layout: CONSTRAINED)
        }
      }
      bracknor: file(relativePath: { eq: "partners/bracknor_logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 151, quality: 100, layout: CONSTRAINED)
        }
      }
      alphacoin: file(relativePath: { eq: "partners/alphacoin.png" }) {
        childImageSharp {
          gatsbyImageData(width: 163, quality: 100, layout: CONSTRAINED)
        }
      }
      origin: file(relativePath: { eq: "partners/origin.png" }) {
        childImageSharp {
          gatsbyImageData(width: 177, quality: 100, layout: CONSTRAINED)
        }
      }
      polybius: file(relativePath: { eq: "partners/polybius.png" }) {
        childImageSharp {
          gatsbyImageData(width: 124, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <S.Partners>
      <Container>
        <div>
          <S.Decoration>
            <img src={decoration} width={569} alt="" />
          </S.Decoration>
          <View centerV row centerH marginB={43} column={mobile}>
            <img src={partners} width={56} height={56} alt="" />
            <Text
              paddingT={7}
              marginL={mobile ? 0 : 36}
              align="center"
              variant="display3"
            >
              We Thank Our World Class Partners
            </Text>
          </View>
          <S.PartnersCard>
            <span className="top-border" />
            <span className="middle-border" />
            <span className="inner-border" />
            <div className="content">
              <S.PartnersList>
                {Object.entries(data).map(([key, val]) => {
                  return (
                    <div key={key}>
                      <GatsbyImage
                        alt=""
                        image={val.childImageSharp.gatsbyImageData}
                      />
                    </div>
                  );
                })}
              </S.PartnersList>
            </div>
          </S.PartnersCard>
        </div>
      </Container>
    </S.Partners>
  );
};

export default Partners;
