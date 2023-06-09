interface OutlinedButtonProps extends React.PropsWithChildren {
  onClick?: VoidFunction;
}

export default function OutlinedButton({ children }: OutlinedButtonProps) {
  return <button>{children}</button>;
}
