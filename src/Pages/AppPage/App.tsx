//react
import React, { useEffect } from 'react';

//redux
import { getItemsAction } from '../../Store/items/actions';
import { useDispatch } from 'react-redux';

//components
import { Header } from '../../Components/Header';
import { ItemsInfo } from '../../Components/ItemsInfo';

//styles
import styles from './styles/index.module.scss';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsAction());
  }, []);

  return (
    <div className={styles.appPageContainer}>
      <Header />
      <ItemsInfo />
    </div>
  );
};
