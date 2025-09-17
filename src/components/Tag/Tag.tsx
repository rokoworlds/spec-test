import styles from './Tag.module.scss';

interface TagProps {
  index: number;
  total: number;
}

export const Tag = ({ index, total }: TagProps) => {
  return (
    <div>
      <p className={styles.text}>{index + 1} из {total} пассажиров</p>
    </div>
  );
};