import React from 'react';
import * as S from './styles';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Text from 'components/UI/Text';
import View from 'components/View';
import linkedinIcon from 'icons/linkedin.svg';

const members = [
  {
    name: 'Devadutta Ghat',
    position: 'CTO, Live Planet',
    id: 'devadutta',
    link: 'https://linkedin.com/in/devadutta',
  },
  {
    name: 'Seth Shapiro',
    position: 'CEO, Artaku NFT',
    id: 'seth',
    advisor: true,
    link: 'https://www.linkedin.com/in/sethshapiro',
  },
  {
    name: 'Hanno Basse',
    position: 'Azure CTO, Media & Entertainment at Microsoft',
    id: 'hanno',
    advisor: true,
    link: 'https://www.linkedin.com/in/hannobasse',
  },
  {
    name: 'Ted Schilowitz',
    position: 'Futurist at Paramount Pictures',
    id: 'ted',
    advisor: true,
    link: 'https://www.linkedin.com/in/ted-schilowitz-a084233/',
  },
  {
    name: 'John Ward',
    position: 'CTO/EVP at iNDEMAND',
    id: 'john',
    advisor: true,
    link: 'https://www.linkedin.com/in/johnaward/',
  },
  {
    name: 'Jason King',
    position: 'Managing Partner at CGS Group',
    id: 'jason',
    advisor: true,
    link: '',
  },
  {
    name: 'Kellam Ames',
    position: 'Director, Ecosystem Development',
    id: 'kellam',
    link: 'https://www.linkedin.com/in/kellam-ames-8328318/',
  },
];

const TeamCard = ({ member, portrait }) => {
  return (
    <S.TeamCard>
      <S.Portrait>
        <GatsbyImage
          alt={member.name}
          image={portrait.childImageSharp.gatsbyImageData}
        />
      </S.Portrait>
      <View row marginT={12} centerV centerH>
        <Text marginR={10} color="violet80" variant="bodyAlt">
          {member.name}
        </Text>
        <a href={member.link} target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} width={20} height={20} alt="" />
        </a>
      </View>
      <Text paddingH={3} variant="smallBody">
        {member.position}
      </Text>
      {member.advisor && (
        <Text color="violet80_72" variant="caption">
          Advisor
        </Text>
      )}
    </S.TeamCard>
  );
};

const TeamMembers = () => {
  const data = useStaticQuery(graphql`
    {
      devadutta: file(relativePath: { eq: "team/devadutta.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 257, quality: 100, layout: CONSTRAINED)
        }
      }
      seth: file(relativePath: { eq: "team/seth.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 257, quality: 100, layout: CONSTRAINED)
        }
      }
      hanno: file(relativePath: { eq: "team/hanno.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 257, quality: 100, layout: CONSTRAINED)
        }
      }
      ted: file(relativePath: { eq: "team/ted.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 257, quality: 100, layout: CONSTRAINED)
        }
      }
      john: file(relativePath: { eq: "team/john.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 257, quality: 100, layout: CONSTRAINED)
        }
      }
      jason: file(relativePath: { eq: "team/jason.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 257, quality: 100, layout: CONSTRAINED)
        }
      }
      kellam: file(relativePath: { eq: "team/kellam.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 257, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  const renderItem = (member) => (
    <TeamCard member={member} portrait={data[member.id]} key={member.id} />
  );
  return <S.TeamMembers>{members.map(renderItem)}</S.TeamMembers>;
};

export default TeamMembers;
