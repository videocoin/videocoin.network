import styled from 'styled-components';

export const Root = styled.div`
  position: fixed;
  left: 16px;
  bottom: 16px;
  z-index: 1000;
  width: 216px;
  padding: 20px;
  box-shadow: 0 8px 20px 0 rgba(12, 4, 23, 0.67);
  border-radius: 12px;
  background-color: #fff;
  & > div {
    &:first-child {
      margin-bottom: 8px;
    }
  }
`;

export const Btns = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  button {
    height: 28px;
    width: 82px;
    border-radius: 8px;
    background-color: #7234c8;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.07px;
    margin-right: 16px;
    border: none;
  }
  a {
    opacity: 0.92;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.07px;
    white-space: nowrap;
  }
`;
