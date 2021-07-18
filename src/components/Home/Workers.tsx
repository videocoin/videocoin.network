import React from 'react';
import * as S from './styles';
import Container from 'styles/Container';
import MainBlock from 'components/MainBlock';
import Text from 'components/UI/Text';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import View from 'components/View';
import workers from 'icons/worker.svg';
import { useBreakpoint } from 'components/BrealpointProvider';
import Button from 'components/UI/Button';

const Workers = () => {
  const { mobile } = useBreakpoint();
  const data = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "workerHome.png" }) {
        childImageSharp {
          gatsbyImageData(width: 519, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <S.Root background="white10">
      <Container>
        <View centerV row centerH column={mobile}>
          <img src={workers} width={56} height={56} alt="" />
          <Text paddingT={7} marginL={mobile ? 0 : 36} variant="display3">
            Workers
          </Text>
        </View>
      </Container>
      <MainBlock
        reverse
        left={
          <GatsbyImage
            alt=""
            image={data.image.childImageSharp.gatsbyImageData}
          />
        }
        right={
          <>
            <Text variant="subtitle" withGradient>
              Tap our Network
            </Text>
            <Text variant="title" marginB={16} color="violet80">
              Turn your unused compute power into cash
            </Text>
            <Text color="grey70_72" marginB={48}>
              VideoCoin apps run on a decentralized network of compute power -{' '}
              <strong>provided by you</strong>. Whether you run a data center or
              an individual PC, convert your unused CPU cycles into revenue.
            </Text>
            <Link to="/workers">
              <Button>Learn More</Button>
            </Link>
          </>
        }
      />
    </S.Root>
  );
};

export default Workers;
