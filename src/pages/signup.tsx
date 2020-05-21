import React from 'react';
import Layout from 'components/layout';
import SEO from 'components/seo';
import Signup from 'components/Signup';

const SignupPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Signup />
    </Layout>
  );
};

export default SignupPage;
