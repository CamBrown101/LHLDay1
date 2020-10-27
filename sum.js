let sum = (args) => {
  let [a, b] = args.slice(2);
  a = Number(a);
  b = Number(b);
  return a + b;
};
console.log(sum(process.argv));
