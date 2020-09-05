// export default {
//   checkPasswordLength(string) {
//     let point = 0;
//     if (/\s/g.test(string)) {
//       return point;
//     }
//     switch (true) {
//       case string.length < 4:
//         point += 3;
//         break;
//       case string.length >= 5 && string.length <= 7:
//         point += 10;
//         break;
//       case string.length >= 9:
//         point += 15;
//         break;
//       default:
//         break;
//     }
//     return point;
//   },
//   checkLetters(string) {
//     let point = 0;
//     switch (true) {
//       case /[a-z]/.test(string):
//         point += 10;
//         break;
//       // case this.checkForMixed(string):
//       //   point += 20;
//       //   break;
//       default:
//         break;
//     }
//     return point;
//   },
//   // checkForMixed(string) {
//   //   for (let i = 0; i < string.length; i++) {
//   //     if (MIXEDCAPITAL.indexOf(string.charAt(i)) > -1 && MIXEDCAPITAL.indexOf(string.charAt(i)) > -1) {
//   //         console.log('found')
//   //       return true;
//   //     }
//   //   }
//   // },
//   characterCount(wordBag, regExp, countPass) {
//     let count = 0;
//     for (let i = 0; i < wordBag.length; i++) {
//       switch (regExp) {
//         case "number":
//           if (/\d/g.test(wordBag[i])) {
//             count++;
//           }
//           break;
//         case "special_character":
//           // eslint-disable-next-line no-useless-escape
//           if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(wordBag[i])) {
//             count++;
//           }
//           break;
//       }
//     }
//     return count === countPass;
//   },
//   checkNumbers(string) {
//     let point = 0;
//     if (/\s/g.test(string)) {
//       return point;
//     }
//     switch (true) {
//       case this.characterCount(string, "number", 1):
//         point += 10;
//         break;
//       case this.characterCount(string, "number", 3):
//         point += 20;
//         break;
//       default:
//         break;
//     }
//     return point;
//   },
//   checkSpecialCharacter(string) {
//     let point = 0;
//     if (/\s/g.test(string)) {
//       return point;
//     }
//     switch (true) {
//       case this.characterCount(string, "special_character", 1):
//         point += 10;
//         break;
//       case this.characterCount(string, "special_character", 2):
//         point += 20;
//         break;
//       default:
//         break;
//     }
//     return point;
//   },
//   calculatePoints(string) {
//     //this method calculates the strength and return the appopriate points
//     let totalPoint = 0;
//     totalPoint += this.checkPasswordLength(string);
//     totalPoint += this.checkNumbers(string);
//     totalPoint += this.checkLetters(string);
//     totalPoint += this.checkSpecialCharacter(string);
//     return totalPoint;
//   }
// };

const m_strUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const m_strLowerCase = "abcdefghijklmnopqrstuvwxyz";
const m_strNumber = "0123456789";
const m_strCharacters = "!@#$%^&*?_~";
export default {
  checkPassword(strPassword) {
    // Reset combination count
    let nScore = 0;

    // Password length
    // -- Less than 4 characters
    if (strPassword.length < 5) {
      nScore += 5;
    }
    // -- 5 to 7 characters
    else if (strPassword.length > 4 && strPassword.length < 8) {
      nScore += 10;
    }
    // -- 8 or more
    else if (strPassword.length > 7) {
      nScore += 25;
    }

    // Letters
    let nUpperCount = this.countContain(strPassword, m_strUpperCase);
    let nLowerCount = this.countContain(strPassword, m_strLowerCase);
    let nLowerUpperCount = nUpperCount + nLowerCount;
    // -- Letters are all lower case
    if (nUpperCount === 0 && nLowerCount !== 0) {
      nScore += 10;
    }
    // -- Letters are upper case and lower case
    else if (nUpperCount !== 0 && nLowerCount !== 0) {
      nScore += 20;
    }

    // Numbers
    let nNumberCount = this.countContain(strPassword, m_strNumber);
    // -- 1 number
    if (nNumberCount === 1) {
      nScore += 10;
    }
    // -- 3 or more numbers
    if (nNumberCount >= 3) {
      nScore += 20;
    }

    // Characters
    let nCharacterCount = this.countContain(strPassword, m_strCharacters);
    // -- 1 character
    if (nCharacterCount === 1) {
      nScore += 10;
    }
    // -- More than 1 character
    if (nCharacterCount > 1) {
      nScore += 25;
    }

    // Bonus
    // -- Letters and numbers
    if (nNumberCount !== 0 && nLowerUpperCount !== 0) {
      nScore += 2;
    }
    // -- Letters, numbers, and characters
    if (nNumberCount !== 0 && nLowerUpperCount !== 0 && nCharacterCount !== 0) {
      nScore += 3;
    }
    // -- Mixed case letters, numbers, and characters
    if (nNumberCount !== 0 && nUpperCount !== 0 && nLowerCount !== 0 && nCharacterCount !== 0) {
      nScore += 5;
    }
    return nScore;
  },
  countContain(strPassword, strCheck) {
    // Declare variables
    let nCount = 0;

    for (let i = 0; i < strPassword.length; i++) {
      if (strCheck.indexOf(strPassword.charAt(i)) > -1) {
        nCount++;
      }
    }

    return nCount;
  }
};
