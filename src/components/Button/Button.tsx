import styles from './Button.module.scss';
import { motion } from "motion/react";


type ButtonProps = {
  text: string;
  onClick?: () => void;
  iconUrl?: string;
};

export const Button = ({ text, onClick, iconUrl}: ButtonProps) => {

  return (
    <motion.button 
      className={styles.button} 
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
       whileTap={{ scale: 0.99 }}
      >
      {iconUrl && <img src={iconUrl} alt="" aria-hidden="true" />}
      {text}
    </motion.button>)
};
