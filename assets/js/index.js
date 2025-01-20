const breakPoint = 100;
for (let i = 2; i <= breakPoint; i++) {
  let counter = 0;
  for (let j = 1; j <= i; j++) {
    let result = i % j;
    if (result == 0) {
      counter++;
    }
  }
  if (counter == 2) {
    console.log(i);
  }
}
