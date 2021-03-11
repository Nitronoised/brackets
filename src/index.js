module.exports = function check(str, config) {
  let sample = config.reduce((a, b) => a + b).split("").filter(e => e !== ',');
  let original = str.split("");
  let mutual = [];
  for (let i = 0; i < sample.length; i++) {
    original.map((e) => e == sample[i] && mutual.push(true))
  }
  return (mutual.length >= sample.length) ? true : false
}
