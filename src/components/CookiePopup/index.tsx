import React, { useEffect, useState } from 'react';
import { Typography } from 'ui-kit';
import { Root, Btns } from './styles';

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
      <Typography type="caption">This website uses cookies.</Typography>
      <Typography type="tiny">
        By continuing to browse, you are agreeing to our use of cookies as
        explained in our cookie policy.
      </Typography>
      <Btns>
        <button type="submit" onClick={onOk}>
          Okay
        </button>
        <a href="/privacy">Learn More</a>
      </Btns>
    </Root>
  ) : null;
};

export default CookiePopup;
