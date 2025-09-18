import styles from './CookiesBar.module.scss';

type CookiesBarProps = {
  handleCookies: () => void; 
};

export const CookiesBar = ({handleCookies} : CookiesBarProps) => {
  return (
    <div className={styles.container}>
        <p className={styles.text}>
          Мы используем куки — про них можно почитать <a className={styles.link} href=""> в правилах </a>
        </p>
        <button className={styles.btn} onClick={handleCookies}>Ok</button>
    </div>
  );
};