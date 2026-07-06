import styled, { css } from "styled-components";

const buttonVariants = {
  primary: css`
    background: linear-gradient(135deg, #38bdf8, #818cf8);
    color: #fff;
    box-shadow: 0 10px 24px rgba(56, 189, 248, 0.24);
  `,
  secondary: css`
    background: rgba(255, 255, 255, 0.08);
    color: #f8fafc;
    border: 1px solid rgba(255, 255, 255, 0.14);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
  `,
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.85rem 1.15rem;
  border: none;
  border-radius: 999px;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    opacity 180ms ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.95;
  }

  &:focus-visible {
    outline: 2px solid rgba(56, 189, 248, 0.45);
    outline-offset: 2px;
  }

  ${({ variant }) => buttonVariants[variant] || buttonVariants.primary}
`;

const Button = ({ children, variant = "primary", ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
