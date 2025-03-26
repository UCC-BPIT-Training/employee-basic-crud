// import express
import express from 'express';
import bodyParser from 'body-parser';
// initialize the express app
const app = express();

// In middleware the order/sequence is important
app.use(bodyParser.json());

// what port to use
app.listen(process.env.PORT || 3000, () => {
  console.log('Service is running');
});
