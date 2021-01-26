import React from 'react';
import './collection.styles.scss';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectShopCollection} from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({collection}) => {
  const {title, items} = collection || {
    title: 'COLLECTION NOT FOUND',
    items: [],
  };
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

CollectionPage.propTypes = {
  collection: PropTypes.object,
};
