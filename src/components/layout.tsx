import React, { ReactNode, Suspense } from 'react';
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

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
    <Suspense fallback={<div />}>
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
    </Suspense>
  );
};

export default Layout;
