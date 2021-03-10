const functions = require("firebase-functions");
const { send } = require("./sendMail.js");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.sendMail = functions.https.onCall(async (req, res) => {
  console.log("trying to send ");
  let r = await send(
    req.name,
    req.email,
    req.subject,
    req.message,
    req.plainMessage
  );
  console.log("done!");
  console.log(r);
  return { message: r };
});
