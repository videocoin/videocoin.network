import styled, { css } from 'styled-components';

const regular = css`
  height: 48px;
  padding: 0 24px;
  font-size: 14px;
  @media (max-width: 768px) {
    padding: 0 21px;
  }
`;

const large = css`
  height: 72px;
  padding: 0 36px;
  font-size: 20px;
`;

const primary = css`
  background: #4e238e;
  border-color: #4e238e;
`;

const secondary = css`
  background: transparent;
  border-color: #4e238e;
  color: #4e238e;
`;

const styles: Record<string, any> = {
  regular,
  large,
  primary,
  secondary,
};

const Button = styled.button.attrs(() => ({
  type: 'button',
}))<{ btnTheme?: string; size?: string }>`
  font-weight: bold;
  border-radius: 12px;
  font-family: inherit;
  color: #ffffff;
  letter-spacing: 0.07px;
  text-align: center;
  line-height: 20px;
  border: 2px solid transparent;
  ${({ size = 'regular' }) => styles[size]};
  ${({ btnTheme = 'primary' }) => styles[btnTheme]};
`;

export default Button;
