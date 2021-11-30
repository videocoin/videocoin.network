import styled from 'styled-components';

export const Root = styled.div`
  height: 75px;
  background: transparent
    linear-gradient(
      270deg,
      #823dff 0%,
      #823dff 12%,
      #3ea8dd 46%,
      #12ed9e 100%,
      #12ed9e 100%
    )
    0 0 no-repeat padding-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  position: relative;
  overflow: hidden;
  @media (max-width: 620px) {
    padding: 0 20px;
  }
  a {
    padding: 10px 24px;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: rgba(255, 255, 255, 0.2);
    font-size: 14px;
    border-radius: 18px;
    position: relative;
    z-index: 1;
    @media (max-width: 620px) {
      display: none;
    }
    img {
      position: absolute;
      left: 83%;
      top: 50%;
      transform: translateY(-50%);
      z-index: -1;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
  & > img:first-of-type {
    margin-left: 77px;
    margin-right: 60px;
    @media (max-width: 768px) {
      max-width: 162px;
      margin-left: 40px;
    }
    @media (max-width: 620px) {
      max-width: 162px;
      margin-right: 0;
      margin-left: 30px;
    }
  }
  & > div:first-of-type {
    a {
      display: none;
    }
    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 620px) {
      font-size: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      a {
        display: inline-block;
        font-size: 8px;
        border-radius: 11px;
        padding: 7px 20px;
        margin-top: 9px;
      }
    }
  }
`;
