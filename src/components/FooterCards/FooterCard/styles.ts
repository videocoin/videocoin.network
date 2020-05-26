import { Link } from 'gatsby';
import styled from 'styled-components';
import { Typography } from 'ui-kit/*';
import { device } from '../../../queries';

export const Root = styled.div`
  background: linear-gradient(225deg, #7234c8 0%, #4e238e 100%);
  border-radius: 36px;
  padding: 26px 24px 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 487px;
  @media ${device.mobile} {
    padding-left: 24px;
    padding-right: 24px;
  }
`;
export const Img = styled.div`
  margin-top: -120px;
  margin-bottom: auto;
  img {
    object-fit: contain;
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

export const Title = styled(Typography)`
  margin-bottom: 8px;
`;
