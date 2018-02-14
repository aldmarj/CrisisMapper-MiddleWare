'use strict';
module.exports = function(app) {
  var api = require('../controllers/neo4jCntroller');
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  // api Routes
  app.route('/tweets')
    .get(api.list_all_tweets)
    
};