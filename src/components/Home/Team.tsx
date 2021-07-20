import React from 'react';
import Text from 'components/UI/Text';
import View from 'components/View';
import team from 'icons/team.svg';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as S from './styles';
import Container from 'styles/Container';
import Logos from 'components/Home/TeamLogos';
import TeamMembers from 'components/Home/TeamMembers';
import Join from 'components/Home/Join';
import Button from 'components/UI/Button';
import { useBreakpoint } from 'components/BrealpointProvider';

const Team = () => {
  const { mobile } = useBreakpoint();
  const data = useStaticQuery(graphql`
    {
      halsey: file(relativePath: { eq: "team/halsey.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 212, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <S.Team>
      <Container>
        <View centerV row centerH marginB={20} column={mobile}>
          <img src={team} width={56} height={56} alt="" />
          <Text
            paddingT={7}
            marginL={mobile ? 0 : 36}
            align="center"
            variant="display3"
          >
            Team and Advisors
          </Text>
        </View>
        <S.Halsey>
          <S.Portrait>
            <GatsbyImage
              alt=""
              image={data.halsey.childImageSharp.gatsbyImageData}
            />
          </S.Portrait>
          <div>
            <Text variant="title2" color="grey70" marginB={8}>
              Halsey Minor
            </Text>
            <Text>
              Halsey and his team at Live Planet have founded or co-founded
              services that today generate 325 million monthly users with a
              cumulative market value of over $250 Billion.
            </Text>
          </div>
        </S.Halsey>
        <Logos />
        <TeamMembers />
      </Container>
      <Join
        text="Meet the entire Live Planet team"
        button={
          <a
            href="https://www.linkedin.com/company/videocoin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button simple>Learn More</Button>
          </a>
        }
      />
      <Container>
        <Text paddingH={mobile ? 0 : 112} align="center" marginB={72}>
          Live Planet, Inc. develops and operates the VideoCoin Network under
          agreement with the VideoCoin Development Association Ltd. Its
          principals and a team of accomplished media and technology advisors
          drive the innovation that is reimagining the future of video.
        </Text>
      </Container>
    </S.Team>
  );
};

export default Team;
