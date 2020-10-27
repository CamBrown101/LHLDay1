const reverse = (args) => {
  let ans = '';
  let newArray = args.slice(2);
  newArray.forEach((element, i) => {
    if (i === 0) {
      ans += '';
    } else {
      ans += '\n';
    }
    for (j = element.length - 1; j >= 0; j--) {
      ans += element[j];
    }
  });
  return ans;
};

console.log(reverse(process.argv));
