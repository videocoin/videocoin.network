import React from 'react';
import Layout from 'components/layout';
import Container from 'styles/Container';
import styled from 'styled-components';
import Header from 'components/Lessons/Header';
import LessonsList from 'components/Lessons/LessonsList';

const Wrapper = styled.div`
  padding: 80px 0;
`;

const Lessons = () => (
  <Layout>
    <Container>
      <Wrapper>
        <Header />
        <LessonsList />
      </Wrapper>
    </Container>
  </Layout>
);

export default Lessons;
