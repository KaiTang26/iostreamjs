var https =require("https");

var options = {

  host: `www.example.org`,
  path: `/`
};

var callback =function(){

  console.log("I'm about to make the request!");
}

console.log("I'm about to make the request!");


https.request(options, callback).end();


console.log("I've made the request!");