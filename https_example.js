var https =require("https");

var options = {

  host: `www.example.org`,
  path: `/`
};

var callback =function(response){

  console.log("I'm about to make the request!");
  console.log(`Response: `, response);
}

console.log("I'm about to make the request!");


https.request(options, callback).end();


console.log("I've made the request!");