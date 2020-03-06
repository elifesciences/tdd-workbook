function getNumberAt(position) {
  if (position == 1) {
    return 1;
  }
  return 0;
};

test('first number in sequence is zero', () => {
  expect(getNumberAt(0)).toBe(0);
});

test('Second number in sequence is one', () => {
  expect(getNumberAt(1)).toBe(1);
});