import styles from './ResultsCard.module.scss';
import { Button } from '../Button/Button';
import control from '../../assets/images/control.png'
import { StampCard } from '../StampCard/StampCard';
import { useCharacter } from '../../context/CharacterContext';

export const ResultsCard = () => {

  const { decision, setDecision, character } = useCharacter();
  const color = decision === "negative" ? 'red' : 'green';

  return (
    <StampCard color={color} borderMode='top'>
          <div className={styles.main}>
            <h2 className={styles.title}>
              { 
                decision === 'negative'
                ? 'Скандал!'
                : 'Успех!'
              }
            </h2>
            <p>
              { 
                decision === 'negative'
                ? character.outcomes.failure
                : character.outcomes.success
              }
            </p>
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