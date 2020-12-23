import React from 'react';
import PropType from 'prop-types';
import {loadStripe} from '@stripe/stripe-js';
import CustomButton from '../custom-buttom/custom-button.component';

const StripeButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51I1VP2D3RwI4xrrlqimLD1IdK3AeWx4lPUJdeoYwVrYAWQnBxrUjFaxT3NNFepWkOPbpS3zslzyLnX019KMyLD1800f5dBZgPM';

  const checkoutClicked = async () => {
    const stripe = await loadStripe(publishableKey);

    const response = await fetch(
      'http://localhost:4242/create-checkout-session',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price: priceForStripe,
          successUrl: 'http://localhost:3000/checkout',
          cancelUrl: 'http://localhost:3000/checkout',
        }),
      }
    );

    const sessionData = await response.json();
    stripe.redirectToCheckout({sessionId: sessionData.id});
  };

  return <CustomButton onClick={checkoutClicked}>Checkout</CustomButton>;
};

export default StripeButton;

StripeButton.propTypes = {
  price: PropType.number,
};
