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
import '../i18n';

export const queries: Record<BreakpointType, string> = {
  mobile: '(max-width: 768px)',
  tablet: '(max-width: 1024px)',
  laptop: '(max-width: 1365px)',
};

const Wrapper = styled.div<{ $light?: boolean }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ $light }) =>
    $light ? 'linear-gradient(180deg, #FFFFFF 0%, #EFEAF6 100%);' : '#1c0937'};
  position: relative;
  overflow: hidden;
`;

const MainContent = styled.div`
  flex: 1;
`;

const Layout = ({
  children,
  hideFooter = false,
  light = false,
}: {
  children: ReactNode;
  hideFooter?: boolean;
  light: boolean;
}) => {
  return (
    <BreakpointProvider queries={queries}>
      <Wrapper $light={light}>
        <GlobalStyle />
        <Header light={light} />
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
