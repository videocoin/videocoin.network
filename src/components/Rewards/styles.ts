import styled from 'styled-components';

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #3ccd91;
  letter-spacing: 0.8px;
  margin-bottom: 16px;
`;

export const List = styled.ul`
  padding-left: 17px;
  margin-top: 20px !important;
  li {
    position: relative;
    padding-left: 25px;
    color: rgba(225, 204, 255, 0.76);
    font-size: 14px;
    font-weight: bold;
    line-height: 24px;
    letter-spacing: 0.28px;
    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 24px;
      height: 24px;
      left: 0;
      top: 3px;
      background-repeat: no-repeat;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDE2IDEzIj4gIDxwYXRoIGZpbGw9IiMzN0NCOEQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTAuNjk5MDE2NzIyLDEwLjMzNzE3NTkgTDQuNjQzMjk1NCwxMy41NzM1MDcyIEM1LjYzOTUyNzU0LDE0LjM5MDkyODQgNy4xMDk3ODQxMSwxNC4yNDU5NzM1IDcuOTI3MjA1MzYsMTMuMjQ5NzQxNCBDNy45NDQ4MjE5LDEzLjIyODA5NTggNy45NDQ4MjE5LDEzLjIyODA5NTggNy45NjIwOTEwMywxMy4yMDYxNzIxIEwxNS40NTQ2OTEsMy42MTU2NDQwNCBDMTUuNzk0NzAxOSwzLjE4MDQzMDIgMTUuNzE3NTI0NiwyLjU1MTk4NjQ0IDE1LjI4MjMxMDcsMi4yMTE5NzU2MyBDMTQuODQ3MDk2OSwxLjg3MTk2NDgxIDE0LjIxODY1MzEsMS45NDkxNDIxMSAxMy44Nzg2NDIzLDIuMzg0MzU1OTYgTDYuMzg2MDQyMjgsMTEuOTc0ODg0IEw2LjM4MTA1ODYxLDExLjk4MTEwODIgQzYuMjY0Mjg0MTUsMTIuMTIzNDI3IDYuMDU0MjQ3NSwxMi4xNDQxMzQ5IDUuOTExOTI4NjIsMTIuMDI3MzYwNCBMMS45Njc2NDk5NSw4Ljc5MTAyOTE5IEMxLjU0MDY5MzMxLDguNDQwNzA1OCAwLjkxMDU4MzM1NCw4LjUwMjgyOTMyIDAuNTYwMjU5OTYzLDguOTI5Nzg1OTUgQzAuMjA5OTM2NTcyLDkuMzU2NzQyNTkgMC4yNzIwNjAwODksOS45ODY4NTI1NCAwLjY5OTAxNjcyMiwxMC4zMzcxNzU5IFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTIpIi8+PC9zdmc+);
    }
  }
`;

export const MinimumsCard = styled.div`
  background-image: linear-gradient(225deg, #7234c8 0%, #4e238e 100%);
  border-radius: 12px;
  padding: 47px;
  margin: 68px 0 108px;
  max-width: 325px;
  text-align: left;
  li {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
    div {
      &:first-child {
        font-size: 14px;
        color: rgba(225, 204, 255, 0.76);
        letter-spacing: 0.28px;
        font-weight: bold;
        margin-bottom: 4px;
        line-height: 24px;
      }
      &:nth-child(2) {
        font-weight: 500;
        letter-spacing: 0.12px;
        color: rgba(255, 255, 255, 0.94);
      }
      &:nth-child(3) {
        font-weight: 500;
        font-size: 10px;
        letter-spacing: 0.25px;
        line-height: 12px;
        color: rgba(255, 255, 255, 0.87);
        margin-top: 10px;
      }
    }
  }
`;
