import React from 'react';
import Layout from 'components/layout';
import Container from 'styles/Container';
import Header from 'components/Lessons/Header';
import LessonsList from 'components/Lessons/LessonsList';

const VideoCoin101 = () => (
  <Layout>
    <Container>
      <Header />
      <LessonsList />
    </Container>
  </Layout>
);

export default VideoCoin101;
