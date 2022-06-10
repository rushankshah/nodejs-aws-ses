const ses = require("node-ses");
const client = ses.createClient({
  key: process.env.AWS_ACCESS_KEY_ID,
  secret: process.env.AWS_SECRET_ACCESS_KEY,
});

client.sendEmail(
  {
    to: "rushankshah65@gmail.com",
    from: "rushankshah65@gmail.com",
    subject: "New email",
    message: "You have a new message",
  },
  (err, data, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Sent successfully!");
    }
  }
);
