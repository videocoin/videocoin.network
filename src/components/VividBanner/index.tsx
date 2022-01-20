import React from 'react';
import { Root, Button } from './styles';

import logo from './assets/logo.svg';
import jellyfish from './assets/jellyfish.png';
import jellyfish2x from './assets/jellyfish@2x.png';

const VividBanner = () => {
  return (
    <Root href="https://www.vividlabs.com/">
      <div>
        VideoCoin Network is now
        <img src={logo} alt="Vivid" />
      </div>
      <div>
        Visit our new website and learn about
        our next-gen FT publishing and
        management platform
      </div>

      <div>
        <Button>
          Join the evolution
          <img src={jellyfish} srcSet={`${jellyfish2x} 2x`} alt="jellyfish" />
        </Button>
      </div>
    </Root>
  );
};

export default VividBanner;
