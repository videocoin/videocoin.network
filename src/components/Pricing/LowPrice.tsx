import React from 'react';
import Img from 'gatsby-image';
import { Typography } from 'ui-kit/*';
import { graphql, useStaticQuery } from 'gatsby';
import Section from 'components/Section';

const LowPrice = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "price.png" }) {
        childImageSharp {
          fluid(maxWidth: 324, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Section mobileReverse reverse light>
      <Img fluid={data.file.childImageSharp.fluid} />
      <div>
        <Typography theme="white" type="smallTitle">
          How is our price so low?
        </Typography>
        <Typography type="subtitleThin" opacity="drift">
          By tapping into resources that would otherwise have gone unused, we
          are able to keep costs as low as possible. We pass those savings on to
          you.
        </Typography>
      </div>
    </Section>
  );
};

export default LowPrice;
