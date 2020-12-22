import React from 'react';
import './collection.styles.scss';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectShopCollection} from '../../redux/shop/shop.selectors';

//mport CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({collection}) => (
  <div className='collection-page'>
    <h2>{collection ? collection.title : 'COLLECTION NOT FOUND'}</h2>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

CollectionPage.propTypes = {
  collection: PropTypes.object,
};
