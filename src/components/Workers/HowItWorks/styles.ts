import styled from 'styled-components';
import { device } from '../../../queries';

export const Root = styled.div`
  padding: 100px 40px;
  @media ${device.mobile} {
    padding: 55px 0;
  }
`;

export const List = styled.ul`
  display: flex;
  margin-top: 64px;
  justify-content: center;
  @media ${device.tablet} {
    flex-direction: column;
    max-width: 508px;
    margin: 64px auto 0;
  }
  @media ${device.mobile} {
    max-width: 100%;
    padding: 0 24px;
  }
`;

export const StepItem = styled.li`
  display: flex;
  flex: 1;
  max-width: 400px;
  @media ${device.tablet} {
    max-width: 100%;
  }
  &:not(:last-child) {
    margin-right: 48px;
    @media ${device.tablet} {
      margin-right: 0;
      margin-bottom: 47px;
    }
  }
  & > div:last-child {
    div:first-child {
      margin-bottom: 12px;
    }
  }
  a {
    color: #fd9369;
  }
`;

export const StepN = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 48px;
  background-color: #3f2a5d;
  border: 1px solid #c5a4e7;
  @media ${device.mobile} {
    margin-right: 30px;
  }
`;
