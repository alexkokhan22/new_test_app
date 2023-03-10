//react
import React from 'react';

//redux
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';

//styles
import styles from './styles/index.module.scss';

//types
import { IItem } from '../../Store/items/models';

export const ItemsInfo = () => {
  const items = useSelector((state: RootState) => state.itemsList.itemsList);

  return (
    <>
      {items.map((i: IItem) => {
        return (
          <div key={i.id} className={styles.itemsInfoContainer}>
            <div className={styles.imageContainer}>
              <img alt={'image'} src={i.image} width={500} />
            </div>
            <div className={styles.itemsInfo}>
              <h2>{i.name}</h2>
              <div className={styles.attributesContainer}>
                <h4>Attributes: </h4>
                <div className={styles.attributes}>
                  {i.attributes.map(a => (
                    <div key={a.trait_type} className={styles.attributesValue}>
                      <span className={styles.traitType}>{a.trait_type}:</span>
                      <span>{a.value}</span>
                    </div>
                  ))}
                </div>
                <h4>Description: {i.description}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
