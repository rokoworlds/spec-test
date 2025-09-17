import { motion } from "motion/react";
import { useCharacter } from "../../context/CharacterContext";
import { PassengerCard } from "../PassengerCard/PassengerCard";
import { ResultsCard } from "../ResultsCard/ResultsCard";
import styles from "./Card.module.scss";


export const Card = () => {
  const { decision } = useCharacter();

  return (
    <div className={styles.container}>
        <div className={styles.passenger}>
          <PassengerCard />
        </div>

        {
          decision !== "none" 
          && <motion.div 
                className={styles.result}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    delay: 1.5,
                    ease: [0, 0.71, 0.2, 1.01],
                 }}
              >
                <ResultsCard />
              </motion.div>
        }
    </div>
  );
};