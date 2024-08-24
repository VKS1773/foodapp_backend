const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
require("dotenv").config();
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// middlewares
app.use(cors());
app.use(express.json());

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.dtkxc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.dtkxc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(console.log("mongodb connected successfully"))
  .catch((error) => console.log("error connecting to mongodb", error));

// app.post("/jwt", async (req, res) => {
//   const user = req.body;
//   const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
//     expiresIn: "1hr",
//   });
//   res.send({ token });
// });
// // importing routes
// const menuRoutes = require("./api/routes/menuRoutes");
// const cartRoutes = require("./api/routes/cartRoutes");
// const userRoutes = require("./api/routes/userRoutes");
// const paymentRoutes = require("./api/routes/paymentRoute");
// app.use("/menu", menuRoutes);
// app.use("/carts", cartRoutes);
// app.use("/users", userRoutes);
// app.use("/payments", paymentRoutes);

// // stripe payment routes

// app.post("/create-payment-intent", async (req, res) => {
//   const { price } = req.body;
//   const amount = price * 100;

//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: amount,
//     currency: "inr",
//     payment_method_types: ["card"],
//   });

//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

app.get("/", (req, res) => {
  res.send("Hello World this is foodApp!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
