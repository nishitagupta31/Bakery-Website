/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require("firebase-functions");
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "rzp_test_tJlg8CNYYqemEE",
  key_secret: "FqhQGNDvDFVvYHUpAVZ9DinS",
});

exports.createRazorpayOrder = functions.https.onCall(async (data, context) => {
  const amount = data.amount;

  const options = {
    amount: amount * 100, // amount in paise
    currency: "INR",
    receipt: `receipt_order_${Date.now()}`,
  };

  try {
    const response = await razorpay.orders.create(options);
    return {
      orderId: response.id,
      amount: response.amount,
      currency: response.currency,
    };
  } catch (error) {
    console.error(error);
    throw new functions.https.HttpsError("internal", error.message);
  }
});
