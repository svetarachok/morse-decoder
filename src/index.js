const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
 
    let arr1 = [...expr]

    let newArr = [];
    for (let i = 0; i < arr1.length; i += 10) {
       newArr.push(arr1.slice(i, i + 10).join(''))
    }

 let arr2 = []
    for (i = 0; i < newArr.length; i++) {
        if (newArr[i] === '**********') {
            arr2.push([' '])
        } else {
        arr2.push(newArr[i].match(/.{1,2}/g).filter(i => i !== '00'));}
    }

let arr3 = arr2.map((item, index) => {
      for (i=0; i<item.length; i++) {
         if (item[i] === '10') {
            item[i] = '.';
         } else if (item[i] === ' ') {
            item[i] = ' ';
         } else if (item[i] === '11') {
         item[i] = '-'
      }
   } 
   return item.join('')
   })

let result = arr3.map(item => {
      for (let key in MORSE_TABLE) {
         if (item === key) {
            item = MORSE_TABLE[key]
         }   
      }
      return item
   })

return result.join('')
}

module.exports = {
    decode
}