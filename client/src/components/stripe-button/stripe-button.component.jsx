import React from 'react';
import PropType from 'prop-types';
import {loadStripe} from '@stripe/stripe-js';
import CustomButton from '../custom-buttom/custom-button.component';
import axios from 'axios';

const StripeButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51I1VP2D3RwI4xrrlqimLD1IdK3AeWx4lPUJdeoYwVrYAWQnBxrUjFaxT3NNFepWkOPbpS3zslzyLnX019KMyLD1800f5dBZgPM';

  const checkoutClicked = async () => {
    const stripe = await loadStripe(publishableKey);

    await axios({
      url: '/create-stripe-checkout-session',
      method: 'post',
      data: {
        price: priceForStripe,
        successUrl: window.location.href,
        cancelUrl: window.location.href,
      },
    }).then(response => {
      stripe.redirectToCheckout({sessionId: response.data.id});
    });
  };

  return <CustomButton onClick={checkoutClicked}>Checkout</CustomButton>;
};

export default StripeButton;

StripeButton.propTypes = {
  price: PropType.number,
};
