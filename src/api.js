// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const Stripe = require('stripe');
const stripe = Stripe(
  'sk_test_51I1VP2D3RwI4xrrlOCXsEluuFoaKWyt9CclR6DN26ZQPgfbFx6hjvpXJkoyBQgsN3xTqTMzYSJJgXmEoKKawKZHi00ud1o3jbN'
);

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: 'Clothing',
          },
          unit_amount: parseInt(req.body.price),
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: req.body.successUrl,
    cancel_url: req.body.cancelUrl,
  });

  res.json({id: session.id});
});

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
