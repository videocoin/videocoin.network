import Layout from 'components/layout';
import SEO from 'components/seo';
import React from 'react';
import Container from 'styles/Container';
import { Typography } from 'ui-kit';

const NetworkPage = () => (
  <Layout>
    <SEO title="Privacy" />
    <Container>
      <div style={{ paddingTop: 140 }}>
        <Typography type="display3">Privacy Page</Typography>
      </div>
    </Container>
  </Layout>
);

export default NetworkPage;
