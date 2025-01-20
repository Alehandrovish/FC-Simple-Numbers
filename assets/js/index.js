const breakPoint = 100;
for (let i = 1; i <= breakPoint; i++) {
  let num = [2, 3, 5, 7];
  let counter = 0;
  if (i > 1) {
    for (let j = 0; j < num.length; j++) {
      let check1 = i / num[j];
      let check2 = i % num[j];
      if (i <= 10) {
        if (check1 == 1.0) {
          console.log(i);
        }
      }
      if (i > 10) {
        if (check2 > 0) {
          counter++;
        }
      }
    }
  }
  if (counter == 4) {
    console.log(i);
  }
}
