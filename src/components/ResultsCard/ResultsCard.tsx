import styles from './ResultsCard.module.scss';
import { Button } from '../Button/Button';
import control from '../../assets/images/control.png'
import { StampCard } from '../StampCard/StampCard';
import { useCharacter } from '../../context/CharacterContext';
import { TypewriterText } from '../TypewriterText/TypewriterText';

export const ResultsCard = () => {

  const { decision, setDecision, character } = useCharacter();
  const color = decision === "negative" ? 'red' : 'green';

  return (
    <StampCard color={color} borderMode='top'>
          <div className={styles.main}>
            <h2 className={styles.title}>
              { 
                decision === 'negative'
                ? <TypewriterText text='Скандал!' delay={1.8} />
                : <TypewriterText text='Успех!' delay={1.8} />
              }
            </h2>
            <span>
              { 
                decision === 'negative'
                ? (
                  <TypewriterText text={character.outcomes.failure} delay={1.9} />
                  )
                : <TypewriterText text={character.outcomes.success} delay={1.9} />
              }
            </span>
        </div>
        <div className={styles.actions}>
            <Button 
              text='Позовите следующего'
              onClick={() => setDecision('none')}
              />
            <img className={styles.control} src={control} alt="" />
        </div>
    </StampCard>

  );
};