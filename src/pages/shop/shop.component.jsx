import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.components';
import PropTypes from 'prop-types';

const ShopPage = ({match}) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;

ShopPage.propTypes = {
  match: PropTypes.object,
};
