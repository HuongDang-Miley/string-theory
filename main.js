/******************
 * YOUR CODE HERE *
 ******************/

const indexedChars = function(str) {
  let result = '';
  for (let i = 0; i< str.length; i++) {
    result += i + str[i]
  }
  return result;
}

const exclaim = function(str){
  let result = ''
  for (let i = 0; i<str.length; i++) {
    if (str[i] === '.' || str[i] === '?' ) {
      result += '!'
    } else {
      result += str[i]
    }
  }
  return result
}

const repeatIt= function(str,num) {
  return str.repeat(num)
}

const truncate = function(str) {
  let result = ''
  if(str.length >= 18) {
    for (let i = 0; i< 15; i++) {
      result += str[i]
    }
    return result + '...'
  } return str 
}

// // Use .split
// const ciEmailify = function(name) {
//   const fullName = name.split(' ')
//   const firstName = fullName[0]
//   const lastName = fullName[1]
//   return firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@codeimmersives.com'
// }

// Use loop
const ciEmailify = function (name) {
  let firstName  = ''
  let lastName = ''
  let indexOfSpace = name.indexOf(' ')
  for (let i =0; i< indexOfSpace; i++) {
    firstName += name[i]
  }
  for (let i = indexOfSpace + 1; i<name.length; i++ ) {
    lastName += name[i]
  }
  return firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@codeimmersives.com'
}

const reverse = function(str) {
  let result = ''
  for (let i = str.length-1; i>=0; i--) {
    result += str[i]
  }
  return result
}

const onlyVowels = function(str) {
  let result = ''
  const vowels = 'aeiou'
  const standardizeStr = str.toLowerCase()
  for (let i =0; i<standardizeStr.length; i++) {
    let includeVowels = vowels.includes(standardizeStr[i])
    if (includeVowels) {
      result += str[i]
    }
  }
   return result 
  }

const numberedChars = function(str) {
  let result = ''
  for (let i=0; i<str.length; i++) {
    result += `(${i+1})` + str[i]
  }
  return result
 }

 const crazyCase = function(str) {
   let result = ''
   let standardizeStr = str.toLowerCase()
   for (let i=0; i<standardizeStr.length; i++) {
     if (i%2!==0) {
       result += standardizeStr[i].toUpperCase()
     } else {result += standardizeStr[i]}
   }
   return result
 }


const titleCase = function(str) {
  let array = str.toLowerCase().split(' ')
  for (let i=0; i<array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].slice(1)  
  }
  array;
  return array.join(' ')
  }


  const camelCase = function(str) {
    let arr = str.toLowerCase().split(' ')
    for(let i=1; i<arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
      }
    return arr.join('')
  }

  const crazyCase2ReturnOfCrazyCase = function(string) {
  let str = string.toLowerCase()
  let result = ''
  let count = ''
  let alphabet = 'abcdefghijklmnopqrstuvwxzy'
  for (let i =0; i<str.length; i++) {
   
    if (count%2 !==0) {
      result += str[i].toUpperCase()
    } else {
      result += str[i]
    }
     if (alphabet.includes(str[i])) {
      count++
    } 
  }
  return result
}


 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  indexedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  numberedChars,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
