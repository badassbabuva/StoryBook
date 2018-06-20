const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:123mitro@ds151840.mlab.com:51840/shopapp');
mongoose.Promise = global.Promise;
module.exports = {mongoose};
