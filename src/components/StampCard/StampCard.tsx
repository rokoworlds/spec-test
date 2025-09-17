import classNames from 'classnames'
import styles from './StampCard.module.scss'

interface StampCardProps {
  children: React.ReactNode;
  className?: string;
  color?: 'light' | 'green' | 'red';
  borderMode?: 'top' | 'block'
}

export const StampCard = ({ children, className, color = 'light', borderMode = 'block'}: StampCardProps) => {
  return (
    <div
      className={classNames(
        styles['stamp-container'],
        styles['stamp-border'],
        styles[color],
        styles[borderMode],
        className
      )}
    >
      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
};