import styles from './Scene.module.scss';
import scene2 from '../../assets/images/scene2.png'
import passanger from '../../assets/images/passanger1.png'
import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

export const Scene = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);


  const personX = useTransform(x, [0, 1], ["-5%", "5%"]);
  const personY = useTransform(y, [0, 1], ["-2%", "2%"]);

  const decorX = useTransform(x, [0, 1], ["2%", "-2%"]);
  const decorY = useTransform(y, [0, 1], ["0.5%", "-0.5%"]);


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
          className={styles.decor}
          src={scene2} 
          alt=""  
          style={{ x: decorX, y: decorY }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1}}
          transition={{ delay: 0.2 }}

          />
        <motion.img 
          width={700} 
          className={styles.main} 
          src={passanger} 
          alt="" 
          style={{ x: personX, y: personY }}
          initial={{ opacity:0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          
          />
    </div>
  );
};