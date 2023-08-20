const ordercreater = require("../models/order");
const stripe = require("stripe")(process.env.STRIPESECRETEKEY);

const checkoutform = async (req, res) => {
  try {
    console.log(
      req.body.cart.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.name,
            },
            unit_amount: Number(item.price.split(".").join("")),
          },
          quantity: item.quantity,
        };
      })
    );
    req.body.cart.map((item) => {
      // console.log(it);
      return {
        price_data: {
          currency: "inr",
          product_data: {
            name: item.name,
          },
          unit_amount: Number(item.price.split(".").join("")),
        },
        quantity: item.quantity,
      };
    });
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.cart.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.name,
            },
            unit_amount: Number(item.price.split(".").join("")),
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.CLIENT_BASE_URL}/success`,
      cancel_url: `${process.env.CLIENT_BASE_URL}/addtocart`,
    });
    console.log(session.url);
    res.json({ url: session.url });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
};

const confirmorder = async (req, res) => {
  const data = await ordercreater.insertMany([
    { order: JSON.stringify(req.body.cart), email: req.body.email },
  ]);
  console.log(data);

  res.json("success");
};

module.exports = { checkoutform, confirmorder };
