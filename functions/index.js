const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HgrZXBwQAvXQ8pIHxHzjtSNEJf6T1dX5CnmFjuCUnPK4Hzov7azLRa23dc3n5kjtuGakVNVZ33kg35bLw37LBEY00F5wsjC0s"
);

// - API

// - App config
const app = express();

// - Middlewares
// cors is like security
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
// endpoints
 app.get("/", (request, response) => response.status(200).send("Hello world"));
// app.get("/dompa", (request, response) => response.status(200).send("AlLO!"));

app.post("/payments/create", async (request, response) => {
  // alternative require params
  const total = request.query.total;

  console.log("Payment Request Received Boom!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // Ok - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command

exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-7f680/us-central1/api
