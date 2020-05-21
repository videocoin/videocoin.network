import React from 'react';
import { Link } from 'gatsby';
import Headroom from 'react-headroom';
import Logo from 'components/Logo';
import SignBlock from 'components/Header/SignBlock';
import Navbar from './Navbar';
import { Root } from './styles';

const Header = () => {
  return (
    <Headroom wrapperStyle={{ marginBottom: -92 }}>
      <Root>
        <Link to="/">
          <Logo />
        </Link>
        <Navbar />
        <SignBlock />
      </Root>
    </Headroom>
  );
};

export default Header;
