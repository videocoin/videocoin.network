import React from 'react';
import * as S from './styles';
import triangles from './assets/Triangles.svg';
import hero from './assets/hero.png';
import hero2x from './assets/hero@2x.png';
import hero_md from './assets/hero_md.png';
import hero_md2x from './assets/hero_md@2x.png';
import View from 'components/View';
import Button from 'components/UI/Button';
import { useBreakpoint } from 'components/BrealpointProvider';
import { Link } from 'gatsby';

const Hero = () => {
  const { tablet } = useBreakpoint();
  return (
    <S.Container>
      <S.HeroRoot>
        <div>
          <S.HeroImage>
            <img src={hero_md} srcSet={`${hero_md2x} 2x`} alt="" />
          </S.HeroImage>
          <S.H1>
            Welcome to <br />
            the Future of Media
          </S.H1>
          <S.HeroText>
            The VideoCoin Network brings innovation to video streaming <br />
            with a next-generation video ecosystem.
          </S.HeroText>
          <View row centerH={tablet} marginT={68} marginB={20}>
            <a
              href="https://console.videocoin.network/sign-up?role=publisher"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Get Started</Button>
            </a>
            <View marginL={16}>
              <Link to="/developers">
                <Button btnTheme="secondary">Learn More</Button>
              </Link>
            </View>
          </View>
          <S.HeroSmallText>
            Create an account and <strong>get $10 in free credit</strong> to try
            VideoCoin Network.
          </S.HeroSmallText>
        </div>
        <div>
          <div>
            <img src={triangles} alt="" />
            <img src={hero} srcSet={`${hero2x} 2x`} alt="" />
          </div>
        </div>
      </S.HeroRoot>
    </S.Container>
  );
};

export default Hero;
