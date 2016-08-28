'use strict';

let checkForBeginningVowels = ( input, vowels ) => {
  let arr = input;
  for (let i = 0; i < vowels.length; i++) {
    if(input[0] === vowels[i]){
      arr.push('-ay');
    }
  }
  let translatedWord = arr.join('');
  return translatedWord;
};

let checkForFirstVowel = ( input, vowels ) => {
  for (let i = 0; i < vowels.length; i++) {
    return input.filter((el,index)=>{
      if(el === vowels[i]){
        return index;

      }
    });
  }
};

let pigLatinTranslator = input => {
  let vowels = ['a','e','i','o','u'];
  let translation = input.split('');
  let completedTranslation;
  completedTranslation = checkForBeginningVowels(translation,vowels);
  // completedTranslation = checkForFirstVowel(translation,vowels);
  return completedTranslation;
};

console.log(pigLatinTranslator("opposite"), 'outside func');



// function pigLatinTranslator( input ) {
//   var inputArr = input.split(' ');
//   var pigLatinWords = [];
//   var vowels = [ 'a', 'e', 'i', 'o', 'u' ];
//   var eachWord;
//   for( var i = 0; i < inputArr.length; i++ ){
//     eachWord = inputArr[i].toString();
//     var newStr = eachWord.slice(0,1);
//     eachWord.substring(1);
//     console.log(newStr, '<---', eachWord.substring(1));
//     for (var j = 0; j < vowels.length; j++){
//       if( eachWord[0] === vowels[j] ){
//         inputArr[i].slice(0,1);
//         pigLatinWords.push(inputArr[i] + 'ay');
//         console.log(pigLatinWords);
//       } else {
//         // console.log(pigLatinWords.push(eachWord + firstLetter + 'ay'));
//       }
//     }
//   }
//   // console.log(pigLatinWords);
// }

// pigLatinTranslator('banana apples surfboards');
