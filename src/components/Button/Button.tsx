interface ButtonProps {
  children: string;
  onClick?: any;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};
