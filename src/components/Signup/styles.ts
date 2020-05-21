import styled from 'styled-components';
import { Form } from 'formik';

export const Root = styled.div`
  padding-top: 114px;
`;

export const Inner = styled.div`
  display: flex;
`;

export const Right = styled.div`
  width: 416px;
  margin-left: auto;
  flex-shrink: 0;
`;
export const Left = styled.div`
  margin-right: 144px;
  padding-top: 56px;
  & > div:nth-child(2) {
    margin: 20px 0;
  }
`;
export const FormWrapper = styled.div`
  border-radius: 10px;
  background: linear-gradient(225deg, #7234c8 0%, #4e238e 100%);
  padding: 40px 40px 30px;
  margin: 24px 0;
`;

export const SForm = styled(Form).attrs(() => ({
  noValidate: true,
}))`
  & > * {
    margin-bottom: 20px;
  }
`;
