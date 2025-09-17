import { Button } from "../Button/Button"
import styles from './PassengerActions.module.scss'
import crossIcon from '../../assets/icons/cross-icon.svg'
import okIcon from '../../assets/icons/ok-icon.svg'
import { useCharacter } from "../../context/CharacterContext"


export const PassengerActions = () => {
    const { setDecision } = useCharacter();

    return (
        <div className={styles.container}>
            <Button 
                text="Отказать" 
                onClick={() => setDecision('negative')} 
                iconUrl={crossIcon}
                />
            <Button 
                text="Пропустить" 
                onClick={() => setDecision('positive')} 
                iconUrl={okIcon}
                />
        </div>
    )
}