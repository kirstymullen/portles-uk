import React from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';
import PropTypes from 'prop-types';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items}) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <div className='collection-preview'>
      <h1
        className='title'
        onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};

export default CollectionPreview;
