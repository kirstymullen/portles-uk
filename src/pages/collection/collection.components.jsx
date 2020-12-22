import React from 'react';
import './collection.styles.scss';
import PropTypes from 'prop-types';

//mport CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({match}) => (
  <div className='collection-page'>
    <h2>{match.params.collectionId} PAGE</h2>
  </div>
);

export default CollectionPage;

CollectionPage.propTypes = {
  match: PropTypes.object,
};
