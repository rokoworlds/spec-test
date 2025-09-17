import styles from './InfoItem.module.scss'

type InfoItemProps = {
  value: string;
  label: string;
};

export const InfoItem = ({ value, label }: InfoItemProps) => {
  return (
    <div>
      <p className={styles.value}>{value}</p>
      <p className={styles.label}>{label}</p>
    </div>
  );
};