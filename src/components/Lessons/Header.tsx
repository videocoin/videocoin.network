import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Button } from 'ui-kit';
import { Link } from 'react-scroll';
import * as S from './styles';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Header = () => {
  const { t } = useTranslation('lessons');
  const data = useStaticQuery(graphql`
    query {
      heroImg: file(relativePath: { eq: "lessons_hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <S.Header>
      <div>
        <Typography theme="white" type="display2">
          {t('Welcome to VideoCoin 101')}.
        </Typography>
        <Typography type="subtitleThin">
          {t(
            'Learn about the VideoCoin Network become an advocate and earn VID'
          )}
        </Typography>
        <Link to="lessons" smooth offset={-50}>
          <Button>Get Started</Button>
        </Link>
      </div>
      <div>
        <Img fluid={data.heroImg.childImageSharp.fluid} />
      </div>
    </S.Header>
  );
};

export default Header;
