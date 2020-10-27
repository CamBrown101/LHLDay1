const pigLatin = (args) => {
  let ans = '';
  let newArray = args.slice(2);

  newArray.forEach((element, i) => {
    if (i === 0) {
      ans += '';
    } else {
      ans += ' ';
    }

    let firstLetter = element[0];
    for (let j = 1; j < element.length; j++) {
      ans += element[j];
    }
    ans += firstLetter;
    ans += 'ay';
  });
  return ans;
};

console.log(pigLatin(process.argv));
