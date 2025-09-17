import styles from './Reminder.module.scss';

// TODO: Нам нужна СВГшка или ПНГ норм. Я за ПНГ - весит меньше, четкость нам не важна.

export const Reminder = () => {
  return (
    <div className={styles.container}>
        <img 
            src='src/assets/icons/pin-icon.png' 
            alt="pin image"
            width={23}
            height={23}
            />
        <a className={styles.link} href="">Памятка</a>
    </div>
  );
};