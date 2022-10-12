import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC, MouseEventHandler} from "react";
import styles from "./Button.module.scss";



interface IButtonProps {
  image?: React.SVGProps<SVGSVGElement>
  label: string
  onClick: (e: React.MouseEvent<HTMLElement>) => void
  variant: string
}



const Button: FC<IButtonProps> = ({image, label, onClick, variant}) => {

  console.log(styles.button);

  return (
      <button onClick={onClick} className={styles[variant]}>
        <>
          {image && image}
          {label}
        </>
      </button>
  );
}

export default Button;