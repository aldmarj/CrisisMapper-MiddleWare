'use strict';
var neo4j = require('neo4j-driver').v1;
    

var driver =  neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', '123456')),
    session = driver.session();

exports.list_all_tweets = function(req, res) {
    session
        .run('MATCH(n:Tweet) RETURN n LIMIT 25')
        .then(function(result){
            var movieArr = [];
            result.records.forEach(function(record){
                console.log();
            });
            res.send(movieArr);
        })
        .catch(function(err){
            console.log("err");
        });
  };