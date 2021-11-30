import React from 'react';
import { Root } from './styles';

import logo from './assets/logo.svg';
import jellyfish from './assets/jellyfish.png';
import jellyfish2x from './assets/jellyfish@2x.png';

const VividBanner = () => {
  return (
    <Root>
      <div>
        VideoCoin is now Vivid Labs
        <a href="https://www.vividlabs.com/">Join the evolution</a>
      </div>
      <img src={logo} alt="Vivid" />
      <div>
        <a href="https://www.vividlabs.com/">
          Join the evolution
          <img src={jellyfish} srcSet={`${jellyfish2x} 2x`} alt="jellyfish" />
        </a>
      </div>
    </Root>
  );
};

export default VividBanner;
