import { motion } from "framer-motion";
import styles from './TypewriterText.module.scss';

type TypewriterTextProps = {
  text: string;
  delay?: number;
};

export const TypewriterText = ({ text, delay = 0 }: TypewriterTextProps) => {
  const START_DELAY = delay;
  const LETTER_DELAY = 0.025;
  const BOX_FADE_DURATION = 0.125;

  return (
    <div className={styles.main}>
      <span />
      <span>
        {text.split("").map((l : string, i : number) => (
          <motion.span key={i}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: START_DELAY + i * LETTER_DELAY,
                duration: 0,
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                delay: START_DELAY + i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
            />
          </motion.span>
        ))}
      </span>
    </div>
  );
};
