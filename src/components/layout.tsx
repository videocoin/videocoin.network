import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GlobalStyle from '../styles/Global';
import Header from './Header';
import Footer from 'components/Footer';

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
    <>
      <GlobalStyle />
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
