import React, { ReactNode } from 'react';
import GlobalStyle from '../styles/Global';
import Header from './Header';
import Footer from 'components/Footer';
import {
  BreakpointProvider,
  BreakpointType,
} from 'components/BrealpointProvider';
import CookiePopup from 'components/CookiePopup';
import styled from 'styled-components';

export const queries: Record<BreakpointType, string> = {
  mobile: '(max-width: 768px)',
  tablet: '(max-width: 1024px)',
  laptop: '(max-width: 1365px)',
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #ffffff 0%, #efeaf6 100%);
  position: relative;
`;

const MainContent = styled.div`
  flex: 1;
`;

const Layout = ({
  children,
  hideFooter = false,
}: {
  children: ReactNode;
  hideFooter?: boolean;
}) => {
  return (
    <BreakpointProvider queries={queries}>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <MainContent>
          <main>{children}</main>
        </MainContent>
        {!hideFooter && <Footer />}
        <CookiePopup />
      </Wrapper>
    </BreakpointProvider>
  );
};

export default Layout;
