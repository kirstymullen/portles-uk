const express = require('express');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
const enforce = requjire('express-sslify');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTP({trustProtoHeader: true}));
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) {
    throw error;
  }
  console.log('Server running on port ' + port);
});

app.post('/create-stripe-checkout-session', async (req, res) => {
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
