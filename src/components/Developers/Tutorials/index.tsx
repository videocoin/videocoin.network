import React from 'react';
import { Typography } from 'ui-kit';
import TutorialsList from 'components/Developers/Tutorials/List';
import { Root } from './styles';

const Tutorials = () => {
  return (
    <Root>
      <Typography type="display3" align="center">
        Developer Tutorials
      </Typography>
      <Typography type="subtitleThin" opacity="drift" align="center">
        Learn how to build applications on the VideoCoin Network
      </Typography>
      <TutorialsList />
    </Root>
  );
};

export default Tutorials;
