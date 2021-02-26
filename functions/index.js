// merabone
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51ILizXA0XN5L2vwErgpRsrU0vnFO2iWbSLvVgT0shHtzTNa8ZcGnTnngjA8kdXvzwNstHgLoGdjIkBFogRqJizth00b0Up7EhE"
);

//to setup an Api

// APP config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//api root
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // sub units
    currency: "usd",
  });

  // ok-created something(paymentintent)
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen command
exports.api = functions.https.onRequest(app);

// example endpont
// http://localhost:5001/clone-react-7fbb6/us-central1/api
