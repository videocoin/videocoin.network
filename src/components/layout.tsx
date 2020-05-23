import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GlobalStyle from '../styles/Global';
import Header from './Header';
import Footer from 'components/Footer';
import {
  BreakpointProvider,
  BreakpointType,
} from 'components/BrealpointProvider';

export const queries: Record<BreakpointType, string> = {
  mobile: '(max-width: 768px)',
  tablet: '(max-width: 1024px)',
  laptop: '(max-width: 1365px)',
};

const Layout = ({ children }: { children: ReactNode }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <BreakpointProvider queries={queries}>
      <GlobalStyle />
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </BreakpointProvider>
  );
};

export default Layout;
