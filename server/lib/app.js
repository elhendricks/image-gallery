const express = require('express');
const app = express();
const morgan = require('morgan');
const errorHandler = require('./error-handler')
const images = require('./routes/images');
const albums = require('./routes/albums');
const cors = require('cors')();


app.use(morgan('dev'));

// // Redirect http to https.
// // only in production
// if(process.env.NODE_ENV === 'production') {
//     // create middle to check each request
//     app.use((req, res, next) => {
//         // (if express directly https, you could check req.secure,
//         // but on heroku we are behind proxy and our server is never
//         // https)
//         // on heroku, they will set this header to communicate
//         // what incoming protocol was used.

//         // if https, call next
//         if(req.headers["x-forwarded-proto"] === "https") next();
//         // otherwise redirect to same url but with https instead of http
//         else res.redirect(`https://${req.hostname}${req.url}`);
//     });
// }

app.use(cors);
app.use(express.static('./public'));

app.use('/api/images', images);
app.use('/api/albums', albums);


app.use(errorHandler);

module.exports = app;
