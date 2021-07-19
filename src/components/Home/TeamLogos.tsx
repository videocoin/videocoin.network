import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import Colors from 'styles/Colors';

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 96px;
  border-radius: 16px;
  background: ${Colors.violet90};
  width: 100%;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 12px;
  }
  & > div:not(:last-of-type) {
    margin-right: 39px;
    @media (max-width: 768px) {
      flex-wrap: wrap;
      margin-right: 10px;
      margin-bottom: 16px;
    }
  }
  & > div {
    @media (max-width: 768px) {
      margin: 0 10px 16px;
      max-width: 25%;
      img {
        max-height: 23px;
      }
    }
  }
  .gatsby-image-wrapper img {
    @media (max-width: 768px) {
      width: auto;
      object-fit: contain !important;
      max-width: 100%;
    }
  }
`;

export const Root = styled.div`
  padding-bottom: 24px;
`;

export const Inner = styled.div`
  position: relative;
  padding: 20px;
  & > span {
    border-radius: 24px;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(206, 197, 218, 0.5);
    width: 100%;
    height: 100%;
  }
`;

const Logos = () => {
  const data = useStaticQuery(graphql`
    {
      liveplanet: file(relativePath: { eq: "team/liveplanet_icon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 146, quality: 100, layout: CONSTRAINED)
        }
      }
      salesforce: file(relativePath: { eq: "team/salesforce_icon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 64, quality: 100, layout: CONSTRAINED)
        }
      }
      uphold: file(relativePath: { eq: "team/uphold_icon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 103, quality: 100, layout: CONSTRAINED)
        }
      }
      opendns: file(relativePath: { eq: "team/opendns_icon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 64, quality: 100, layout: CONSTRAINED)
        }
      }
      vignette: file(relativePath: { eq: "team/vignette_icon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 108, quality: 100, layout: CONSTRAINED)
        }
      }
      cnet: file(relativePath: { eq: "team/cnet_icon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 44, quality: 100, layout: CONSTRAINED)
        }
      }
      google_voice: file(relativePath: { eq: "team/google_voice_icon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 96, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <Root>
      <Inner>
        <List>
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
        </List>
        <span />
      </Inner>
    </Root>
  );
};

export default Logos;
