import styled from 'styled-components';

export const Button = styled.div`
  padding: 10px 24px;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  font-size: 14px;
  border-radius: 18px;
  position: relative;
  z-index: 1;
  white-space: nowrap;
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
`;

export const Root = styled.a`
  font-family: UniviaPro;
  min-height: 75px;
  padding: 24px 12px;
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
    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 18px
    }
  & > img:first-of-type {
    margin: 0 50px;
    @media (max-width: 768px) {
      max-width: 162px;
      margin: 0 40px;
    }
    @media (max-width: 620px) {
      max-width: 162px;
      margin-right: 0;
      margin-left: 30px;
    }
  }
  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    font-size: 14px;
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
    }
    @media (max-width: 400px) {
      max-width: 130px;
    }
    img {
      margin-top: 5px;
    }
  }
  & > div:nth-child(2) {
    color: #ede202;
    margin: 0 48px;
      line-height: 1.4;
      font-weight: 500;
    max-width: 330px;
  }
  & > div:last-of-type {
    min-width: 220px;
    display: flex;
    justify-content: center;
  }
`;
