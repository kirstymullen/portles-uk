import React from 'react';
import PropTypes from 'prop-types';
import './collection-item.styles.scss';
import CustomButton from '../custom-buttom/custom-button.component';

const CollectionItem = ({name, price, imageUrl}) => (
  <div className='collection-item'>
    <div className='image' style={{backgroundImage: `url(${imageUrl})`}} />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton inverted>ADD TO BASKET</CustomButton>
  </div>
);

export default CollectionItem;

CollectionItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
};
