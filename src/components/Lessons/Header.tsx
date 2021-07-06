import React from 'react';
import { Link } from 'react-scroll';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import MainBlock from 'components/MainBlock';
import Text from 'components/UI/Text';
import Button from 'components/UI/Button';

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      heroImg: file(relativePath: { eq: "lessons_hero.png" }) {
        childImageSharp {
          gatsbyImageData(width: 400, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <MainBlock
      reverse
      left={
        <GatsbyImage
          alt=""
          image={data.heroImg.childImageSharp.gatsbyImageData}
        />
      }
      right={
        <>
          <Text variant="display1">Welcome to VideoCoin 101.</Text>
          <Text marginB={24}>
            Learn about the VideoCoin Network become an advocate and earn VID
          </Text>
          <Link to="lessons" smooth offset={-50}>
            <Button>Get Started</Button>
          </Link>
        </>
      }
    />
  );
};

export default Header;
