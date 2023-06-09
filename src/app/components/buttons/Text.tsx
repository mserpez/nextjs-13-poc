interface OutlinedButtonProps extends React.PropsWithChildren {
  onClick?: VoidFunction;
}

export default function TextButton({ children }: OutlinedButtonProps) {
  return <button>{children}</button>;
}
