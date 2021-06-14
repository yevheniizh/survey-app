import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  title?: string;
  onClickHandler: () => void;
}

const Button: React.FC<ButtonProps> = ({ title = 'Send', onClickHandler }) => {
  return (
    <button className={styles.button} onClick={onClickHandler}>
      {title}
    </button>
  );
};

export default Button;
