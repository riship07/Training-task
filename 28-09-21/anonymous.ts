var names = ["rishi", "bharat", "ketan","sohil"];

names.forEach(function (s) {
  console.log(s.toUpperCase());
});                                         //Anonymous functions.
 
names.forEach((s) => {
  console.log(s.toUpperCase());       
});