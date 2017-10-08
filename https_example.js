var https =require("https");

var options = {

  host: `www.example.org`,
  path: `/`
};

var callback =function(response){

  console.log("I'm about to make the request!");

  response.on(`data`, function(chunk){

    console.log(`[-- chunk of length `+chunk.length+`--]`);

    console.log(typeof chunk);

    console.log(chunk.toString());

  });


}

console.log("I'm about to make the request!");


https.request(options, callback).end();


console.log("I've made the request!");