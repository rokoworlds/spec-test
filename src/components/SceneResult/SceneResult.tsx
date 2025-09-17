import styles from './SceneResult.module.scss';

import passangerOk from '../../assets/images/passanger-ok.png'
// import passangerNo from '../../assets/images/passanger-no.png'
import msgOk from '../../assets/images/msg1.1-ok.png'
import msgOkMobile from '../../assets/images/msg-mob-ok.png'
import msgNo from '../../assets/images/msg1.1-no.png'
import msgNoMobile from '../../assets/images/msg-mob-no.png'
import cheecks from '../../assets/images/cheecks.png'
import angry from '../../assets/images/angry.png'

import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";
import type { Decision } from '../../types/types';

interface SceneResultProps {
  decision: Decision;
}

export const SceneResult = ({decision} : SceneResultProps) => {

  const message = decision === 'negative' ? msgNo : msgOk
  const messageMobile = decision === 'negative' ? msgNoMobile : msgOkMobile


  const x = useMotionValue(0);
  const y = useMotionValue(0);


  const personX = useTransform(x, [0, 1], ["-5%", "5%"]);
  const personY = useTransform(y, [0, 1], ["-2%", "2%"]);

  const msgX = useTransform(x, [0, 1], ["-3%", "3%"]);
  const msgY = useTransform(y, [0, 1], ["5%", "-5%"]);

  const cheecksX = useTransform(x, [0, 1], ["-2%", "2%"]);
  const cheecksY = useTransform(y, [0, 1], ["-5%", "5%"]);
  
  const angryX = useTransform(x, [0, 1], ["-4%", "2%"]);
  const angryY = useTransform(x, [0, 1], ["2%", "-4%"]);
  
  const angry2X = useTransform(x, [0, 1], ["3%", "-3%"]);
  const angry2Y = useTransform(y, [0, 1], ["-3%", "3%"]);

    useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normX = e.clientX / innerWidth;
      const normY = e.clientY / innerHeight;
      x.set(normX);
      y.set(normY);
    };
        window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

  return (
    <div className={styles.container}>
        <motion.img 
          className={styles.main} 
          src={passangerOk} 
          alt="" 
          style={{ x: personX, y: personY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          />
        {
          decision === 'negative' &&
          <motion.img 
            className={styles.angry} 
            src={angry} 
            alt="" 
            style={{ x: angryX, y: angryY }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          />
        }
        {
          decision === 'negative' && 
          <motion.img 
            className={styles.angry2} 
            src={angry} 
            alt="" 
            style={{ x: angry2X, y: angry2Y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          />
        }
        
        {
          decision === 'positive' && 
          <motion.img 
            className={styles.cheecks} 
            src={cheecks} 
            alt="" 
            style={{ x: cheecksX, y: cheecksY }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          /> 
        }

        <picture>
            <source srcSet={messageMobile} media="(max-width: 767px)" />
            <motion.img 
              className={styles.msg} 
              src={message} 
              alt=""
              style={{ x: msgX, y: msgY }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              />
        </picture>
    </div>
  );
};