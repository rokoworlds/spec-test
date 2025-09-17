import { PassengerActions } from '../PassengerActions/PassengerActions';
import { PassengerInfo } from '../PassengerInfo/PassengerInfo';
import { Reminder } from '../Reminder/Reminder';
import { Tag } from '../Tag/Tag';
import styles from './PassengerCard.module.scss';
import { StampCard } from '../StampCard/StampCard';
import { useCharacter } from '../../context/CharacterContext';
import {AnimatePresence, motion} from 'motion/react'

export const PassengerCard = () => {
  const {decision} = useCharacter()
  return (
    <StampCard>
      <motion.div
      layout
      transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className={styles.header}>
          <Tag index={0} total={7} />
          <Reminder />
        </div>
        <div className={styles.main}>
          <PassengerInfo />
        </div>
      </motion.div>


      <AnimatePresence mode="popLayout">
            {decision === "none" && (
                <motion.div
                layout="position"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
                  className={styles.actions}>
                  <PassengerActions />
                </motion.div>
            )}
      </AnimatePresence>
    </StampCard>
  );
};
