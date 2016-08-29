'use strict';

let checkForBeginningVowels = ( input, vowels ) => {
  let arr = input;
    vowels.filter((el)=>{
      if(el === input[0]){
        return arr.push('ay');
      }
    });
    return arr.join('');
};

let checkForFirstVowel = ( input, vowels ) => {
  let arr = input;
  let findVowel;
  let counter = 0;
  for(let i = 0; i < input.length; i++) {
    counter++;
    for (let j = 0; j < vowels.length; j++) {
      if(vowels[j] === input[i]){
        let nonVowels = arr.splice(0,(counter-1));
        arr = arr.concat(`-${nonVowels.join('')}ay`);
        return arr.join('');
      }
    }
  }
};

let pigLatinTranslator = input => {
  let vowels = ['a','e','i','o','u'];
  let translation = input.split('');
  let completedTranslation1 = checkForBeginningVowels(translation,vowels);
  let completedTranslation2 = checkForFirstVowel(translation,vowels);
  return completedTranslation1,completedTranslation2;
};

console.log(pigLatinTranslator("handsome"), 'outside func');

