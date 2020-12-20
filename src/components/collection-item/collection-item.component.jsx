import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './collection-item.styles.scss';
import CustomButton from '../custom-buttom/custom-button.component';
import {addItem} from '../../redux/basket/basket.actions';

const CollectionItem = ({item, addItem}) => {
  const {name, price, imageUrl} = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{backgroundImage: `url(${imageUrl})`}} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        ADD TO BASKET
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

CollectionItem.propTypes = {
  item: PropTypes.object,
  addItem: PropTypes.func,
};
