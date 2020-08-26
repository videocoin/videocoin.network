import Layout from 'components/layout';
import SEO from 'components/seo';
import React from 'react';
import DownloadHub from 'components/DownloadHub';

const DownloadHubPage = () => {
  return (
    <Layout>
      <SEO title="Download hub" />
      <DownloadHub />
    </Layout>
  );
};

export default DownloadHubPage;
