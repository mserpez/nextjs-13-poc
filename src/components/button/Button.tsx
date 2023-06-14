import { styled } from "styled-components";

interface ButtonProps {
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

const BaseButton = styled.button<Partial<ButtonProps>>`
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
`;

const SizedButton = styled(BaseButton)<{ size: ButtonProps["size"] }>`
  padding: ${({ size }) => {
    switch (size) {
      case "small":
        return "10px 16px";
      case "medium":
        return "11px 20px";
      case "large":
        return "12px 24px";
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "12px";
      case "medium":
        return "14px";
      case "large":
        return "16px";
    }
  }};
`;

const VariantButton = styled(SizedButton)<{ variant: ButtonProps["variant"] }>`
  ${({ variant }) => {
    switch (variant) {
      case "contained":
        return `
        background-color: var(--primary);
          color: #fff;
        `;
      case "outlined":
        return `
          border: 1px solid var(--primary);
          color: var(--primary);
        `;
      case "text":
        return `
          background-color: transparent;
          color: var(--primary);
        `;
    }
  }}
`;

export default function Button(props: ButtonProps) {
  const { variant = "contained", size = "medium", label, onClick } = props;

  return (
    <VariantButton
      onClick={onClick}
      type="button"
      variant={variant}
      size={size}
    >
      {label}
    </VariantButton>
  );
}
