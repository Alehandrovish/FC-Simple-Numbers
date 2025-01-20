const breakPoint = 100;
loop: for (let i = 2; i <= breakPoint; i++) {
  for (let j = 2; j < i; j++) {
    let result = i % j;
    if (result == 0) {
      continue loop;
    }
  }
  console.log(i);
}
