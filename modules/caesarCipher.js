export default function caesarCipher(string, value) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  function splitString(string) {
    return string.toLowerCase().split('');
  }

  function shiftJoin(array) {
    let shiftedArray = [];
    let regex = /[a-z]/;
    array.forEach((el) => {
      if (regex.test(el)) {
        let shifted = shiftChar(el);
        shiftedArray.push(shifted);
      } else shiftedArray.push(el);
    });
    return shiftedArray.join('').toUpperCase();
  }

  function shiftChar(char) {
    let index = loopIndex(char);
    function loopIndex(char) {
      if (alphabet.indexOf(char) + value >= 26) {
        return alphabet.indexOf(char) + value - 26;
      } else return alphabet.indexOf(char) + value;
    }
    let shifted = alphabet[index];
    return shifted;
  }

  let splitArray = splitString(string);
  let encryptedString = shiftJoin(splitArray);
  return encryptedString;
}
