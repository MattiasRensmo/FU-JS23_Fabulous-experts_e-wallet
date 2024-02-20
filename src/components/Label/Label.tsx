
import { ReactNode } from 'react';
import styles from './Label.module.scss';

type Props = {
  children?: ReactNode;
};

const Label = ({ children }: Props) => {
  return <label className={styles.Label}>{children}</label>;
};

export { Label };