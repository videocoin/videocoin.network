import React from 'react';
import { Root, Btns } from './styles';
import Text from 'components/UI/Text';
import Button from 'components/UI/Button';

const GetStarted = () => {
  const handleClick = () => {
    typeof window !== 'undefined' &&
      window.gtag('event', 'click', {
        send_to: 'AW-766963740/vD8-CLi05tUBEJzg2-0C',
      });
  };
  return (
    <Root>
      <Text variant="display1">Get Started</Text>
      <Text>
        Create an account and well start you off with a $10 credit to get
        started
      </Text>
      <Btns>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://console.videocoin.network/sign-up?role=publisher"
          onClick={handleClick}
        >
          <Button>Sign up for free</Button>
        </a>
        <a href="mailto:support@videocoin.network">
          <Button btnTheme="secondary">Talk to us</Button>
        </a>
      </Btns>
    </Root>
  );
};

export default GetStarted;
