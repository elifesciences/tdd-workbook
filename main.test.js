function getNumberAt(position) {
  return position;
};

test.each([[0,0],[1,1]])(
  'Number matches expected in sequence', (position,expected) => {
    expect(getNumberAt(position)).toBe(expected);
  }
);
