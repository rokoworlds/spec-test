import styles from './CookiesBar.module.scss';


export const CookiesBar = () => {
  return (
    <div className={styles.container}>
        <p className={styles.text}>
          Мы используем куки — про них можно почитать <a className={styles.link} href=""> в правилах </a>
        </p>
        <button className={styles.btn}>Ok</button>
    </div>
  );
};