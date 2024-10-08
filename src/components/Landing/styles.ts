import styled from 'styled-components';

export const Root = styled.div`
  color: #0c0417;
  padding-bottom: 123px;
  img {
    max-width: 100%;
  }
`;

export const H1 = styled.h1`
  font-size: 56px;
  line-height: 72px;
  letter-spacing: 0.96px;
  font-weight: 900;
  margin-bottom: 3px;
  @media (max-width: 1024px) {
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 36px;
    letter-spacing: 0.48px;
    line-height: 40px;
  }
`;

export const H2 = styled.h2`
  font-size: 40px;
  line-height: 32px;
  letter-spacing: 0.8px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 18px;
  @media (max-width: 1024px) {
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    letter-spacing: 0.48px;
  }
`;

export const HeroRoot = styled.div`
  display: flex;
  margin-bottom: 125px;
  margin-top: 92px;
  align-items: flex-start;
  height: 500px;
  color: #0c0417;

  @media (max-width: 1024px) {
    text-align: center;
    height: auto;
    margin-top: 30px;
    margin-bottom: 60px;
  }
  @media (max-width: 768px) {
    overflow: hidden;
  }
  & > div {
    &:first-child {
      min-width: 800px;
      flex: 1;
      flex-shrink: 0;
      @media (max-width: 1440px) {
        margin-left: 112px;
      }
      @media (max-width: 1024px) {
        margin-left: 0;
        min-width: 0;
      }
      @media (max-width: 768px) {
        min-width: auto;
      }
    }
    &:last-child {
      position: relative;
      transform: translate(2%, -28%);
      @media (max-width: 1440px) {
        transform: translate(-13%, -29%);
      }
      @media (max-width: 1024px) {
        position: absolute;
        z-index: -1;
        transform: translate(-14%, 22%);
        display: none;
      }
      img {
        &:last-child {
          position: absolute;
          z-index: 1;
          top: 26%;
          left: 30px;
          @media (max-width: 1440px) {
            top: 27%;
            left: 260px;
          }
          @media (max-width: 1024px) {
            display: none;
          }
        }
      }
    }
  }
`;

export const HeroText = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.4px;
  opacity: 0.72;
  @media (max-width: 768px) {
    font-size: 16px;
    letter-spacing: 0.32px;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding: 0 64px;
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 0.32px;
  opacity: 0.72;
  text-align: center;
  max-width: 640px;
  margin: 0 auto 30px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.28px;
  }
`;

export const FeaturesList = styled.ul`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.48px;
  margin-right: 143px;
  margin-left: 153px;
  white-space: nowrap;
  @media (max-width: 1300px) {
    margin-right: 52px;
    margin-left: 0;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    margin-left: 0;
    margin-right: 0;
  }
  li {
    display: flex;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: 32px;
    }
    &::before {
      content: '';
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzdweCIgaGVpZ2h0PSIyN3B4IiB2aWV3Qm94PSIwIDAgMzcgMjciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+UGF0aCAyPC90aXRsZT4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaWRlc2NyZWVuIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzc4LjAwMDAwMCwgLTE2NDUuMDAwMDAwKSIgZmlsbD0iIzJCQjQ3QSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9Ikhvdy1XZS1Eby1JdCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzc4LjE2NjY2NywgMTI0Ni45OTk2NDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJTdGFja2VkLUdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMzkyLjAwMDM2MCkiPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTIiIHBvaW50cz0iMzEuMDEzNzAzIDYuNzU2NzAyMiAzNi42NTY4Mzc3IDEyLjc0NjU4NjkgMTcuNzQzODYyNyAzMi42MjgxMTU1IDEyLjE0MjA0NjIgMzIuNjcwOTI1NSAwLjM0Mzk1Mjc1NSAyMC42MjI0NzU2IDUuOTA0NDUxMjcgMTQuNTQ2OTcwOSAxNC44ODEgMjMuNzE0NjMyOSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=');
      display: block;
      width: 36px;
      height: 26px;
      margin-right: 26px;
      background-repeat: no-repeat;
      @media (max-width: 768px) {
        width: 28px;
        height: 19px;
        background-size: contain;
      }
    }
  }
`;

export const FeatureCard = styled.div`
  background-color: #fff;
  box-shadow: 20px 20px 32px 0 rgba(39, 26, 58, 0.08);
  border-radius: 8px;
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 18px 36px 36px;
  @media (max-width: 1024px) {
    max-width: 510px;
    margin: 0 auto 32px;
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    &:first-child {
      width: 172px;
      height: 172px;
      margin-bottom: 16px;
    }
    &:nth-child(2) {
      font-size: 24px;
      font-weight: bold;
      letter-spacing: 0.48px;
      margin-bottom: 20px;
      white-space: nowrap;
      @media (max-width: 1440px) {
        white-space: normal;
      }
      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 32px;
        letter-spacing: 0.32px;
        margin-bottom: 12px;
      }
    }
    &:last-child {
      font-size: 20px;
      font-weight: 500;
      opacity: 0.6;
      letter-spacing: 0.4px;
      line-height: 32px;
      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.28px;
      }
    }
  }
  &:not(:last-child) {
    margin-right: 32px;
    @media (max-width: 1024px) {
      margin-right: auto;
    }
  }
`;

export const HeroImage = styled.div`
  display: none;
  margin-bottom: 12px;
  img {
    display: block;
    max-width: 100%;
    object-fit: contain;
  }
  @media (max-width: 1024px) {
    display: flex;

    justify-content: center;
    img {
      max-width: none;
      margin: auto;
    }
  }
  @media (max-width: 768px) {
    width: calc(100vw - 48px);
    img {
      width: 428px;
    }
  }
`;

export const PoweredBy = styled.div`
  margin: 40px 0;
  & > div:first-child {
    font-size: 19px;
    font-weight: 600;
    color: #858585;
    margin-bottom: 30px;
  }
  & > div:last-child {
    display: flex;
    @media (max-width: 1024px) {
      justify-content: center;
    }
    & > div:first-child {
      padding-right: 33px;
      border-right: 1px solid #c5c5c5;
      @media (max-width: 768px) {
        padding-right: 20px;
      }
    }
    & > div:last-child {
      padding-left: 26px;
      @media (max-width: 768px) {
        padding-left: 20px;
      }
    }
  }
`;

export const News = styled.div`
  padding-bottom: 40px;
  border-bottom: 1px solid #c5c5c5;
  max-width: 600px;
  margin-bottom: 40px;
  @media (max-width: 1024px) {
    margin: 0 auto 40px;
  }
`;

export const NewsLabel = styled.div`
  font-weight: 700;
  color: #c6bfd2;
  text-transform: uppercase;
  border: 1px solid #c6bfd2;
  border-radius: 8px;
  display: inline-block;
  padding: 6px 5px 4px;
  margin-bottom: 20px;
`;

export const NewsLink = styled.a`
  color: #7233c8;
  font-weight: 500;
  font-size: 21px;
  line-height: 1.5;
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    justify-content: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }

  form {
    margin-left: 20px;
    display: flex;
    @media (max-width: 768px) {
      margin-top: 12px;
      margin-left: 0;
      flex-direction: column;
    }
  }
  input {
    height: 72px;
    width: 260px;
    background: #ffffff;
    border: 2px solid #c4c4c4;
    border-radius: 8px;
    margin-right: 10px;
    padding: 0 20px;
    font-weight: 500;
    &::placeholder {
      color: #858585;
    }
    @media (max-width: 768px) {
      width: 100%;
      font-size: 16px;
      padding: 0 12px;
    }
  }
`;

export const SuccessForm = styled.div`
  margin-left: 20px;
  font-size: 22px;
  font-weight: 500;
`;
export const RightImages = styled.div`
  pointer-events: none;
`;
