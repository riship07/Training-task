type rp = { a: number; b: number };
function main({ a, b }: rp) {
  console.log(a + b );
}
function sum({ a, b, c }) {
    console.log(a + b + c);
  }
sum({ a: 10, b: 20, c: 30 });
main({a:10,b:20});