const express = require('express');
let axios = require('axios');
const ExpressError = require("./expressError")
const app = express(); // Changed var to const since it is what I am familiar with.

app.use(express.json());

const API_DATABASE = 'https://api.github.com/users';


app.post('/', async function(req, res, next) {
  try {
    // First we need to create an array of requests
    let results = req.body.developers.map(dev => {
      axios.get(`${API_DATABASE}/${dev}`);
    });

    // getRes will wait for the requests to finish then continue
    let getRes = await Promise.all(results);

    let out = getRes.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.json(out);
  } catch {
    return next(err);
  }
});

// 404 Error Handler
app.use(function (req, res, next) {
  const err = new ExpressError('Not Found', 404);
  return next(err);
});

// Error Handler for other status errors
app.use(function(err, req, res, next) {
  let status = err.status || 500;

  return res.status(status).json({
    status, 
    message: err.message
  });
});

app.listen(3000, function() {
  console.log('server available on port 3000');
});

module.exports = app;
