import React from 'react';
import CustomButton from '../custom-buttom/custom-button.component';
import PropTypes from 'prop-types';
import './basket-dropdown.styles.scss';

import {selectBasketItems} from '../../redux/basket/basket.selectors';
import BasketItem from '../basket-item/basket-item.component';
import {connect} from 'react-redux';

const BasketDropDown = ({basketItems}) => (
  <div className='basket-dropdown'>
    <div className='basket-items'>
      {basketItems.map(basketItem => (
        <BasketItem key={basketItem.id} item={basketItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  basketItems: selectBasketItems(state),
});

export default connect(mapStateToProps)(BasketDropDown);

BasketDropDown.propTypes = {
  basketItems: PropTypes.array,
};
