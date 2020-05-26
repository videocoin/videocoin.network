import React from 'react';
import { MarketingButton, Typography } from 'ui-kit/*';
import { Root, Btns } from './styles';
import Container from 'styles/Container';
import img from './img.svg';
const Community = () => {
  return (
    <Container>
      <Root>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <Typography type="smallTitle">
            Have Questions?
            <br />
            Need Help Setting Up?
          </Typography>
          <Typography type="bodyThin">
            Check out our community forum to chat with others
          </Typography>
          <Btns>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://forum.videocoin.network"
            >
              <MarketingButton>Join Community</MarketingButton>
            </a>
          </Btns>
        </div>
      </Root>
    </Container>
  );
};

export default Community;
