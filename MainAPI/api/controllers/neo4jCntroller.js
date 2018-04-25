'use strict';
var neo4j = require('neo4j-driver').v1;
    

var driver =  neo4j.driver('bolt://neo4j-core-0@35.187.165.149:7687', neo4j.auth.basic('neo4j', '')),
    session = driver.session();

exports.list_all_tweets = function(req, res) {
    session
        .run('MATCH (a:Tweet) WHERE a.crisis = "Nepal Earthquake" RETURN a.text AS text, a.crisis AS crisis')
        
        .then(function(result){
            var tweetArr = [];
            result.records.forEach(function(record){
                tweetArr.push({

                    tweetText: record.get("text")
                    
                });
                console.log(record.get("text"));
            });
            res.send(tweetArr);
        })
        .catch(function(err){
            console.log(err);
        });
  };