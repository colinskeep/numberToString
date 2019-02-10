
function numberToString(){
  const input = 100;
  console.log(input)
  const fifteen = 'fifteen';
  const undred = 'undred';
  const endNumbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  const weirdTeens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const overTwenty = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (input <= 10) {
    console.log(endNumbers[input]);
    return endNumbers[input];
  }
  if (input > 10 && input < 20) {
    console.log(weirdTeens[input - 10])
    return weirdTeens[input - 10]
  }
  if (input > 15) {
    var digits = input.toString().split('');
    if (digits.length < 3){
      console.log(overTwenty[digits[0]] + endNumbers[digits[1]]);
    }else {
      console.log(undred);
      return undred;
    }
  }
}
numberToString();
