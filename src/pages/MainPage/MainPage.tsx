import { Card } from '../../components/Card/Card';
import { Scene } from '../../components/Scene/Scene';
import { SceneResult } from '../../components/SceneResult/SceneResult';
import styles from './MainPage.module.scss';

import { motion } from "motion/react";
import { characters } from '../../assets/data/data';
import { CharacterContext } from '../../context/CharacterContext';
import { useState } from 'react';
import type { Decision } from '../../types/types';


export const MainPage = () => {
  const emma = characters[0];
  const [decision, setDecision] = useState<Decision>('none');

  return (
    <CharacterContext.Provider value={{ character: emma, decision, setDecision }}>
      <div className={styles.container}>
        <div className={styles.scene}>
          {decision === 'none' 
          ? <Scene />
          : <SceneResult decision={decision} />
          }
        </div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
        >
          <Card />
        </motion.div>
      </div>
    </CharacterContext.Provider>
  );
};