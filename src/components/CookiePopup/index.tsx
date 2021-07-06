import React, { useEffect, useState } from 'react';
import { Root, Btns } from './styles';
import Text from 'components/UI/Text';

const CookiePopup = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('hideCookie')) {
      setOpen(true);
    }
  }, []);
  const onOk = () => {
    localStorage.setItem('hideCookie', 'true');
    setOpen(false);
  };
  return isOpen ? (
    <Root>
      <Text variant="caption">This website uses cookies.</Text>
      <Text variant="smallBody">
        By continuing to browse, you are agreeing to our use of cookies as
        explained in our cookie policy.
      </Text>
      <Btns>
        <button type="submit" onClick={onOk}>
          Okay
        </button>
        <a
          href="https://storage.googleapis.com/videocoin-network-policies/VideoCoinNetworkWebsiteTermsofUse.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </Btns>
    </Root>
  ) : null;
};

export default CookiePopup;
