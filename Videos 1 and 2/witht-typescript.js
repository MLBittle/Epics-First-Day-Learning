
function add(a: Number, b: Number) {
  return a + b;
}

const result = add('2', '5'); //TypeScript warns that these strings are not compatible before we run the code!

console.log(result);