import { useCharacter } from "../../context/CharacterContext";
import { InfoItem } from "../InfoItem/InfoItem";
import styles from './PassengerInfo.module.scss';

export const PassengerInfo = () => {
  const {character} = useCharacter()
  return (
    <div className={styles.container}>
      <InfoItem value={character.name} label="Имя" />
      <InfoItem value={character.origin} label="Откуда" />
      <InfoItem value={character.purpose} label="Цель поездки" />
    </div>
  );
};