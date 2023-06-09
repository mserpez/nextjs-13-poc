interface ContainedButtonProps extends React.PropsWithChildren {
  onClick?: VoidFunction;
}

export default function ContainedButton({ children }: ContainedButtonProps) {
  return <button>{children}</button>;
}
