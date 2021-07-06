import React from 'react';
import { Root, Btns } from './styles';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';
import developers from 'icons/developers.svg';
import View from 'components/View';
import Text from 'components/UI/Text';
import Button from 'components/UI/Button';
import Container from 'styles/Container';
import { useBreakpoint } from 'components/BrealpointProvider';
const DevelopersHero = () => {
  const { mobile, tablet } = useBreakpoint();
  const { t } = useTranslation('developers');
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "developersHero.png" }) {
        childImageSharp {
          gatsbyImageData(width: 531, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <Root>
      <Container>
        <div>
          <GatsbyImage
            alt=""
            image={data.file.childImageSharp.gatsbyImageData}
          />
          <div>
            <View row column={mobile} centerV centerH={tablet} marginB={10}>
              <View marginR={mobile ? 0 : 16}>
                <img src={developers} width={36} height={36} alt="" />
              </View>
              <Text variant="subtitle" withGradient uppercase>
                {t('Develop on VideoCoin Network')}
              </Text>
            </View>
            <Text variant="display2">
              Realize your creative vision with VideoCoin’s robust video
              infrastructure.
            </Text>
            <Btns>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://console.videocoin.network/sign-up?role=publisher"
              >
                <Button>{t('Join for Free')}</Button>
              </a>
              <a
                href="https://docs.videocoin.network"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button btnTheme="secondary">{t('Developers Docs')}</Button>
              </a>
            </Btns>
          </div>
        </div>
      </Container>
    </Root>
  );
};

export default DevelopersHero;
