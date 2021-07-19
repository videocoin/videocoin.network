import styled from 'styled-components';
import Colors from 'styles/Colors';
import { device } from '../../../queries';

export const Images = styled.div`
  position: relative;
  @media ${device.mobile} {
    overflow: hidden;
    margin-left: -28px;
    margin-right: -28px;
  }
  & > img {
    border: 0;
    display: block;
  }
  & > img:first-of-type {
    margin-bottom: -250px;
    position: relative;
    z-index: 2;

    left: 50%;
    transform: translateX(-50%);
    margin-left: 10px;
  }
  & > img:nth-child(2) {
    position: relative;
    z-index: 1;

    left: 50%;
    transform: translateX(-50%);
  }
  & > img:last-of-type {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 202px;
  }
`;

export const Card = styled.div`
  position: relative;
  height: 343px;
  border: 1px solid #fff;
  border-radius: 24px;
  z-index: 1;
  padding: 20px;
  max-width: 404px;
  width: 100%;
  margin: -174px auto 55px;
  @media ${device.mobile} {
    width: 402px;
    left: 50%;
    transform: translateX(-50%);
  }
  & > div:first-of-type {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 24px;
    background: #cec5da80;
    filter: blur(4px);
  }
  & > div:last-of-type {
    height: 100%;
    background: ${Colors.white0};
    border-radius: 16px;
    padding: 102px 20px 32px;
    & > div:first-of-type {
      border-bottom: 1px solid ${Colors.white30};
      margin-bottom: 12px;
      padding-bottom: 12px;
    }
  }
  table {
    text-align: left;
    td:first-of-type {
      padding-right: 19px;
      padding-top: 2px;
      padding-bottom: 2px;
    }
    td:last-of-type {
      text-align: right;
    }
  }
`;
