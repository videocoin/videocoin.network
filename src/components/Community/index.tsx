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
            <MarketingButton>Join Community</MarketingButton>
          </Btns>
        </div>
      </Root>
    </Container>
  );
};

export default Community;
