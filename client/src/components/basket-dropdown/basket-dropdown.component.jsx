import React from 'react';
import CustomButton from '../custom-buttom/custom-button.component';
import PropTypes from 'prop-types';
import './basket-dropdown.styles.scss';

import {selectBasketItems} from '../../redux/basket/basket.selectors';
import BasketItem from '../basket-item/basket-item.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {toggleBasketHidden} from '../../redux/basket/basket.actions';

import {useHistory} from 'react-router-dom';

const BasketDropDown = ({basketItems, dispatch}) => {
  const history = useHistory();
  return (
    <div className='basket-dropdown'>
      <div className='basket-items'>
        {basketItems.length > 0 ? (
          basketItems.map(basketItem => (
            <BasketItem key={basketItem.id} item={basketItem} />
          ))
        ) : (
          <span>Your basket is empty.</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleBasketHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  basketItems: selectBasketItems,
});

export default connect(mapStateToProps)(BasketDropDown);

BasketDropDown.propTypes = {
  basketItems: PropTypes.array,
  dispatch: PropTypes.func,
};
