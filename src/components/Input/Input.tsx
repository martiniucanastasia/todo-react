import { ChangeEvent } from "react";

interface InputProps {
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, onChange }: InputProps) => {
  return (
    <>
      <input type="text" value={value} onChange={onChange} />
    </>
  );
};
