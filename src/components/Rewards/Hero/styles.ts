import styled from 'styled-components';
import { device } from '../../../queries';
import Colors from 'styles/Colors';

export const Root = styled.div`
  padding-bottom: 135px;
  padding-top: 36px;
  background: linear-gradient(
      180deg,
      #ffffff 11.51%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      27.6% 43.78% at 86.81% 100%,
      rgba(255, 74, 122, 0.15) 0%,
      rgba(245, 53, 104, 0) 100%
    ),
    radial-gradient(
      42.56% 79.71% at 56.94% 100%,
      rgba(114, 52, 200, 0.15) 0%,
      rgba(144, 86, 228, 0) 100%
    ),
    radial-gradient(
      36.18% 61.44% at 100% 0%,
      rgba(255, 138, 60, 0.05) 0%,
      rgba(255, 138, 60, 0) 100%
    ),
    linear-gradient(180deg, #ffffff 0%, #f2f0f4 100%);
`;

export const Img = styled.div`
  position: relative;
  width: 1040px;
  text-align: center;
  margin: 0 auto;
  @media ${device.tablet} {
    width: 385px;
    flex-shrink: 0;
    margin-left: -20px;
  }
  @media ${device.mobile} {
    max-width: 100%;
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-left: 0;
    pointer-events: none;
  }
`;

const Payment = styled.div`
  position: absolute;
  font-weight: bold;
  font-size: 20px;
  line-height: 36px;
  color: ${Colors.violet80};
  @media ${device.tablet} {
    display: none;
  }
`;
export const Payment1 = styled(Payment)`
  left: 21.1%;
`;
export const Payment2 = styled(Payment)`
  left: 47.8%;
`;
export const Payment3 = styled(Payment)`
  left: 74.5%;
`;

export const Features = styled.ul`
  text-align: left;
  display: flex;
  width: 1067px;
  margin: 39px auto 0;
  @media ${device.tablet} {
    padding-left: 0;
    width: 100%;
    margin-left: -20px;
    margin-top: 80px;
    flex-direction: column;
  }
  @media ${device.mobile} {
    justify-content: center;
    margin: 235px auto auto;
    max-width: 320px;
  }
  li {
    margin-right: 21px;
    @media ${device.tablet} {
      max-width: 320px;
      margin-right: auto;
      margin-left: auto;
    }
    &:first-child {
      max-width: 340px;
      margin-right: auto;
      @media ${device.tablet} {
        margin-right: 0;
        margin-bottom: 116px;
      }
      @media ${device.mobile} {
        margin-bottom: 255px;
        margin-left: 20px;
      }
    }
    &:nth-child(2) {
      display: none;
      margin-bottom: 120px;
      @media ${device.tablet} {
        display: block;
      }
      @media ${device.mobile} {
        margin-bottom: 270px;
      }
    }
    &:nth-child(3) {
      max-width: 255px;

      @media ${device.tablet} {
        margin-bottom: 80px;
      }
      @media ${device.mobile} {
        margin-bottom: 260px;
      }
    }
    &:nth-child(4) {
      max-width: 255px;
      margin-right: 0;
    }
  }
  p {
    position: relative;
    padding-left: 68px;
    &::before {
      content: '';
      position: absolute;
      display: block;
      background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.905 10.626a10 10 0 11-5.601-7.652' stroke='url(%23paint0_linear)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.5 10.5l5 4.5L22 4' stroke='url(%23paint1_linear)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='21.677' y1='24.035' x2='-5.606' y2='10.722' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%237234C8'/%3E%3Cstop offset='.443' stop-color='%23F53568'/%3E%3Cstop offset='1' stop-color='%23FA6E37'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear' x1='21.128' y1='15.518' x2='5.38' y2='5.388' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%237234C8'/%3E%3Cstop offset='.443' stop-color='%23F53568'/%3E%3Cstop offset='1' stop-color='%23FA6E37'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");
      width: 24px;
      height: 24px;
      left: 20px;
      top: -1px;
      background-repeat: no-repeat;
    }
  }
`;

export const FeatureTitle = styled.div`
  min-height: 48px;
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  margin-top: -6px;
  @media ${device.tablet} {
    min-height: auto;
  }
  @media ${device.mobile} {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
  }
`;

export const FeatureTop = styled.div`
  font-size: 16px;
  line-height: 2;
  font-weight: 700;
  color: ${Colors.violet80};
  margin-bottom: 12px;
  display: none;
  align-items: center;
  img {
    margin-right: 8px;
  }
  @media ${device.tablet} {
    display: flex;
  }
`;

export const FeaturePayment = styled.div`
  background-color: ${Colors.grey70};
  color: ${Colors.white0};
  display: flex;
  align-items: center;
  padding: 6px 0 6px 22px;
  border-radius: 6px;
  letter-spacing: 0.12px;
  margin-right: 12px;
  width: 100px;
  position: relative;
  img {
    position: absolute;
    z-index: 1;
    left: -15px;
  }
  input {
    border: none;
    background: transparent;
    padding-left: 1px;
    font-weight: bold;
    line-height: 24px;
    width: 100%;
    color: ${Colors.white0};
  }
`;

export const Inner = styled.div`
  margin: 77px auto 0;
  position: relative;
  @media ${device.tablet} {
    max-width: 768px;
    display: flex;
    align-items: flex-start;
  }
  @media ${device.mobile} {
    padding: 0;
    margin-top: 32px;
    margin-left: -6px;
    margin-right: -6px;
  }
`;
