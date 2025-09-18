import styles from './Stamp.module.scss';



import { motion } from "framer-motion";

type StampProps = {
  imageUrl: string;
};

export const Stamp = ({ imageUrl }: StampProps) => {
  return (
 <motion.img
      src={imageUrl}
      alt="stamp"
      className={styles.stamp}
      initial={{ y: -120, scale: 1.3, opacity: 0 }}
      animate={{
        y: 0,
        scale: [1.3, 1],
        opacity: 1,
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        times: [0, 1],
      }}
    />
  );
};