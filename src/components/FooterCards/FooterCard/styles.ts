import { Link } from 'gatsby';
import styled from 'styled-components';
import { device } from '../../../queries';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 32px 56px;
  @media ${device.mobile} {
    padding: 0;
    &:not(:last-of-type) {
      margin-bottom: 94px;
    }
  }
  &:not(:last-of-type) {
    margin-right: 73px;
  }
`;
export const Img = styled.div`
  margin-bottom: 29px;
  img {
    object-fit: contain;
    max-width: 100%;
  }
`;

export const SLink = styled(Link)`
  margin-top: 56px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background-color: #3f2a5d;
  padding: 0 36px;
  color: #fff;
  letter-spacing: -0.1px;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
`;
