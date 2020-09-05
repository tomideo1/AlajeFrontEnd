// const MIXEDCAPITAL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const MIXEDLOWER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export default {
  checkPasswordLength(string) {
    let point = 0;
    if (/\s/g.test(string)) {
      return point;
    }
    switch (true) {
      case string.length < 4:
        point += 3;
        break;
      case string.length >= 5 && string.length <= 7:
        point += 10;
        break;
      case string.length >= 9:
        point += 15;
        break;
      default:
        break;
    }
    return point;
  },
  checkLetters(string) {
    let point = 0;
    switch (true) {
      case /[a-z]/.test(string):
        point += 20;
        break;
      // case this.checkForMixed(string):
      //   point += 20;
      //   break;
      default:
        break;
    }
    return point;
  },
  // checkForMixed(string) {
  //   for (let i = 0; i < string.length; i++) {
  //     if (MIXEDCAPITAL.indexOf(string.charAt(i)) > -1 && MIXEDCAPITAL.indexOf(string.charAt(i)) > -1) {
  //         console.log('found')
  //       return true;
  //     }
  //   }
  // },
  characterCount(wordBag, regExp, countPass) {
    let count = 0;
    for (let i = 0; i < wordBag.length; i++) {
      switch (regExp) {
        case "number":
          if (/\d/g.test(wordBag[i])) {
            count++;
          }
          break;
        case "special_character":
          // eslint-disable-next-line no-useless-escape
          if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(wordBag[i])) {
            count++;
          }
          break;
      }
    }
    return count >= countPass;
  },
  checkNumbers(string) {
    let point = 0;
    if (/\s/g.test(string)) {
      return point;
    }
    switch (true) {
      case this.characterCount(string, "number", 1):
        point += 10;
        break;
      case this.characterCount(string, "number", 3):
        point += 20;
        break;
      default:
        break;
    }
    return point;
  },
  checkSpecialCharacter(string) {
    let point = 0;
    if (/\s/g.test(string)) {
      return point;
    }
    switch (true) {
      case this.characterCount(string, "special_character", 1):
        point += 10;
        break;
      case this.characterCount(string, "special_character", 2):
        point += 20;
        break;
      default:
        break;
    }
    return point;
  },
  calculatePoints(string) {
    //this method calculates the strength and return the appopriate points
    let totalPoint = 0;
    totalPoint += this.checkPasswordLength(string);
    totalPoint += this.checkNumbers(string);
    totalPoint += this.checkLetters(string);
    totalPoint += this.checkSpecialCharacter(string);
    return totalPoint;
  }
};
