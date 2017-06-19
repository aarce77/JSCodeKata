
describe('Two Characters', function () {
  it('Sample Test Case', function () {
    var twoCharacters = new TwoCharacters("beabeefeab");

    expect(twoCharacters.findMax()).toBe(5);
  });

  it('Test Case 04', function () {
    var twoCharacters = new TwoCharacters("uyetuppelecblwipdsqabzsvyfaezeqhpnalahnpkdbhzjglcuqfjnzpmbwprelbayyzovkhacgrglrdpmvaexkgertilnfooeazvulykxypsxicofnbyivkthovpjzhpohdhuebazlukfhaavfsssuupbyjqdxwwqlicbjirirspqhxomjdzswtsogugmbnslcalcfaxqmionsxdgpkotffycphsewyqvhqcwlufekxwoiudxjixchfqlavjwhaennkmfsdhigyeifnoskjbzgzggsmshdhzagpznkbahixqgrdnmlzogprctjggsujmqzqknvcuvdinesbwpirfasnvfjqceyrkknyvdritcfyowsgfrevzon");

    expect(twoCharacters.findMax()).toBe(0);
  });

  it('Test Case 08', function () {
    var twoCharacters = new TwoCharacters("cwomzxmuelmangtosqkgfdqvkzdnxerhravxndvomhbokqmvsfcaddgxgwtpgpqrmeoxvkkjunkbjeyteccpugbkvhljxsshpoymkryydtmfhaogepvbwmypeiqumcibjskmsrpllgbvc");

    expect(twoCharacters.findMax()).toBe(8);
  });

  it('Test Case 15', function () {
    var twoCharacters = new TwoCharacters("pvmaigytciycvjdhovwiouxxylkxjjyzrcdrbmokyqvsradegswrezhtdyrsyhg");

    expect(twoCharacters.findMax()).toBe(6);
  });
});
