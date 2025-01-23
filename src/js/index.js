const BREAK_POINT = 100;
loop: for (let i = 2; i < BREAK_POINT; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      continue loop;
    }
  }
  console.log(i);
}
