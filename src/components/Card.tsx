import React, { ReactNode } from 'react';
import Colors, { TColors } from 'styles/Colors';
import styled from 'styled-components';
import { device } from '../queries';

const Root = styled.div<{ color: TColors }>`
  border-radius: 24px;
  padding: 20px;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    background-color: ${({ color }) => color && Colors[color]};
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    height: 100%;
    border-radius: 14px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex: 1;
    @media (max-width: 768px) {
      padding: 16px;
    }
  }
  .top-border {
    border-radius: 24px;
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.73) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  .middle-border {
    border-radius: 24px;
    display: block;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    background: #cec5da80;
    position: absolute;
    left: 1px;
    top: 1px;
    z-index: 1;
  }
  .inner-border {
    position: absolute;
    width: calc(100% - 36px);
    height: calc(100% - 36px);
    left: 18px;
    top: 18px;
    z-index: 1;
    border-radius: 16px;
    background: linear-gradient(
      180deg,
      rgba(113, 48, 204, 0.54) 0%,
      #7130cc 100%
    );
  }
  @media ${device.tablet} {
    grid-column: span 6;
  }
`;

const Card = ({
  color = 'white0',
  children,
}: {
  color?: TColors;
  children: ReactNode;
}) => {
  return (
    <Root color={color}>
      <span className="top-border" />
      <span className="middle-border" />
      <span className="inner-border" />
      <div className="content">{children}</div>
    </Root>
  );
};

export default Card;
