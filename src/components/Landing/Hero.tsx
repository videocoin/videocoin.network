import React from 'react';
import * as S from './styles';
import triangles from './assets/Triangles.svg';
import hero from './assets/hero.png';
import hero2x from './assets/hero@2x.png';
import hero_md from './assets/hero_md.png';
import hero_md2x from './assets/hero_md@2x.png';
import videocoin from './assets/videocoin.svg';
import filecoin from './assets/filecoin.svg';
import View from 'components/View';
import Button from 'components/UI/Button';
import { useBreakpoint } from 'components/BrealpointProvider';
import { Link } from 'gatsby';
import News from 'components/Landing/News';
import Form from 'components/Landing/Form';

const Hero = () => {
  const { mobile, tablet } = useBreakpoint();
  return (
    <S.Container>
      <S.HeroRoot>
        <div>
          <S.HeroImage>
            <img src={hero_md} srcSet={`${hero_md2x} 2x`} alt="" />
          </S.HeroImage>
          <S.H1>Video NFTs. Done Right.</S.H1>
          <S.PoweredBy>
            <div>Powered by</div>
            <div>
              <div>
                <img src={videocoin} alt="Videocoin" />
              </div>
              <div>
                <img src={filecoin} alt="Filecoin" />
              </div>
            </div>
          </S.PoweredBy>
          <News />
          <Form />
        </div>
        <S.RightImages>
          <div>
            <img src={triangles} alt="" />
            <img src={hero} srcSet={`${hero2x} 2x`} alt="" />
          </div>
        </S.RightImages>
      </S.HeroRoot>
    </S.Container>
  );
};

export default Hero;
