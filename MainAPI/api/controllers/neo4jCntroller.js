'use strict';
var neo4j = require('neo4j-driver').v1;
    

var driver =  neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', '123456')),
    session = driver.session();

exports.list_all_tweets = function(req, res) {
    session
        .run('MATCH (tweet { tweetID: "913419275544748032" })-[:FROM]->(geo) RETURN tweet.tweetID,tweet.tweetText,tweet.tweetTime, geo.lat, geo.lon')
        
        .then(function(result){
            var tweetArr = [];
            result.records.forEach(function(record){
                tweetArr.push({

                    tweetID: record.get("tweet.tweetID"),
                    tweetText: record.get("tweet.tweetText"),
                    tweetTime: record.get("tweet.tweetTime"),
                    tweetLat: record.get("geo.lat"),
                    tweetLon: record.get("geo.lon")
                    
                });
                console.log(record.get("tweet.tweetID"));
            });
            res.send(tweetArr);
        })
        .catch(function(err){
            console.log(err);
        });
  };