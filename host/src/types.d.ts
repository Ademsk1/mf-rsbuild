declare module 'provider/Button' {
  import { FC, ReactNode } from 'react';
  
  interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
  }
  
  const Button: FC<ButtonProps>;
  export default Button;
} 