
describe('Super Reduced String', function () {
  it('Sample Test Case', function () {
    var superReducedString = new SuperReducedString("aaabccddd");

    expect(superReducedString.reduceString()).toBe("abd");
  });
});
