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
    let encodedLetters = []  //array of encoded letters with length = 10

    for (let i = 0; i < expr.length; i += 10) {
        encodedLetters.push(expr.slice(i, (i + 10)))
    }

    let dashesAndDotes = encodedLetters.map((encode) => {   //array of dashes and dotes
        if (encode == '**********') {
            return ' '
        }
        let unencoded = ''
        for (i = 0; i < 10; i += 2) {
            if (encode[i] == '1' && encode[i + 1] == '1') {
                unencoded += '-'
            } else if (encode[i] == '1' && encode[i + 1] == '0') {
                unencoded += '.'
            }
        }
        return unencoded
    })

    let unencodedLetters = dashesAndDotes.map((unencode) => {     //array of unencoded letters 
        if (unencode === ' ') {
            return ' '
        } else {
            return MORSE_TABLE[unencode]
        }
    });

    let final = unencodedLetters.reduce((acc, letter) => {      //final string 
        acc += letter;
        return acc
    }, '')

    return final 
}

module.exports = {
    decode
}