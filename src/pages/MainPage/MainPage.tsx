import { Card } from '../../components/Card/Card';
import { Scene } from '../../components/Scene/Scene';
import { SceneResult } from '../../components/SceneResult/SceneResult';
import styles from './MainPage.module.scss';

import { AnimatePresence, motion } from "motion/react";
import { characters } from '../../assets/data/data';
import { CharacterContext } from '../../context/CharacterContext';
import { useState } from 'react';
import type { Decision } from '../../types/types';
import { CookiesBar } from '../../components/CookiesBar/CookiesBar';


export const MainPage = () => {
  const emma = characters[0];
  const [decision, setDecision] = useState<Decision>('none');
  const [isVisible, setIsVisible] = useState(true)

  function handleCookies() {
    setIsVisible(!isVisible)
  }



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

      <AnimatePresence initial={false}>
        {
          isVisible &&
          <motion.div 
            className={styles.cookies}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0}}
            
            >
            <CookiesBar handleCookies={handleCookies} />
          </motion.div>
        }
      </AnimatePresence>
      </div>
    </CharacterContext.Provider>
  );
};