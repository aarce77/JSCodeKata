describe('Hackerland Radio Transmitters', function () {

  it('Sample Test Case', function () {
    var hrt = new HackerlandRadioTransmitters("5 1", "1 2 3 4 5");
    expect(hrt.MinimunRadiosNeeded).toBe(2);
  });

  it('Test Case #1', function () {
    var hrt = new HackerlandRadioTransmitters("8 2", "7 2 4 6 5 9 12 11");
    expect(hrt.MinimunRadiosNeeded).toBe(3);
  });
});