'use strict';
module.exports = function(app) {
  var api = require('../controllers/neo4jCntroller');

  // api Routes
  app.route('/tweets')
    .get(api.list_all_tweets)
    
};