import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
  margin-left: auto;
  padding-left: 15px;
`;

export const Popup = styled.div`
  position: absolute;
  top: calc(100% + 15px);
  left: -15px;
  width: 156px;
  background-color: #eee3ff;
  border-radius: 8px;
  padding: 8px 0;
  button {
    display: block;
    background: none;
    border: none;
    padding: 8px 20px;
    width: 100%;
    text-align: left;
    transition: 0.15s ease-in-out;
    &:hover {
      background-color: #7234c8;
      & > div {
        color: #fff !important;
      }
    }
    > div {
      color: #0c0417 !important;
      transition: 0.15s ease-in-out;
    }
  }
`;

export const Handler = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    width: 16px;
    margin-left: 8px;
  }
`;
