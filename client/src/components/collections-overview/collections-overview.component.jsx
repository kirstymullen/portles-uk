import React from 'react';
import {useSelector} from 'react-redux';
import './collections-overview.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import {selectShopCollectionsForPreview} from '../../redux/shop/shop.selectors';

const CollectionsOverview = () => {
  const collections = useSelector(selectShopCollectionsForPreview);
  return (
    <div className='collections-overview'>
      {collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
