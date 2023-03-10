//react
import React from 'react';

//components
import { ReactComponent as HeaderIcon } from './images/logo-etherscan.svg';

//styles
import styles from './styles/index.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderIcon />
    </div>
  );
};
