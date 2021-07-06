import styled from 'styled-components';
import { device } from '../../queries';
import Colors from 'styles/Colors';
import Card from 'components/Card';

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #3ccd91;
  letter-spacing: 0.8px;
  margin-bottom: 16px;
`;

export const List = styled.ul`
  padding-top: 12px;
  margin-top: 16px;
  li {
    position: relative;
    padding-left: 52px;
    text-align: left;
    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 36px;
      height: 36px;
      left: 0;
      top: 3px;
      background-repeat: no-repeat;
      background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.905 10.626a10 10 0 11-5.601-7.652' stroke='url(%23paint0_linear)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.5 10.5l5 4.5L22 4' stroke='url(%23paint1_linear)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='21.677' y1='24.035' x2='-5.606' y2='10.722' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%237234C8'/%3E%3Cstop offset='.443' stop-color='%23F53568'/%3E%3Cstop offset='1' stop-color='%23FA6E37'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear' x1='21.128' y1='15.518' x2='5.38' y2='5.388' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%237234C8'/%3E%3Cstop offset='.443' stop-color='%23F53568'/%3E%3Cstop offset='1' stop-color='%23FA6E37'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");
      background-size: cover;
    }
  }
`;

export const MinimumsCard = styled.div`
  max-width: 273px;
  li:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;

export const DisclaimerText = styled.div`
  position: absolute;
  font-size: 12px;
  text-align: center;
  line-height: 28px;
  font-weight: 600;
  color: ${Colors.grey10};
  bottom: -48px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
`;
