if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
const port = 3000;
const express = require('express');
const fs = require('fs');
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
const baseUrl = `http://localhost:${port}`;
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const test = 'danish';
const testAgain = 'danish';
const tesrub = 'khhk';
const test = 'test';

app.use(cors());

app.set('view engine', 'ejs');
app.use(express.static('../public'));
app.use(bodyParser.json());

const stripe = require('stripe')(stripeSecretKey);

app.get('/store', (req, res) => {
	fs.readFile('items.json', (error, data) => {
		if (error) res.status(500).end();
		res.render('store.ejs', {
			items: JSON.parse(data),
			stripePublicKey: stripePublicKey,
		});
	});
});

const payment = async (payment) => {
	const paymentIntent =
		await stripe.paymentIntents.create({
			amount: payment,
			currency: 'usd',
		});
	return paymentIntent.client_secret;
};

app.post('/create-checkout-session', async (req, res) => {
	const session = await stripe.checkout.sessions.create({
		payment_method_types: ['card'],

		line_items: req.body.items_data.map((item) => {
			return {
				price_data: {
					currency: 'usd',
					product_data: {
						name: item.name,
					},
					unit_amount: item.price * 100,
				},
				quantity: item.quantity,
			};
		}),
		mode: 'payment',
		success_url: baseUrl,
		cancel_url: baseUrl,
	});
	res.send({
		sessionId: session.id,
		redirectUrl: session.url,
	});
});

app.listen(port);
