// DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const copyEl = document.getElementById('copy');

// objects
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// generate event listen
if(generateEl) {
    generateEl.addEventListener('click', () => {
        const length = +lengthEl.value;
        const hasLower = lowercaseEl.checked;
        const hasUpper = uppercaseEl.checked;
        const hasNumbers = numbersEl.checked;
        const hasSymbols = symbolsEl.checked;
    
        console.log(generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length));
    });
}

// Copy password to clipboard
if(copyEl) {
    copyEl.addEventListener('click', () => {
        const textarea = document.createElement('textarea');
        const password = resultEl.innerText;
    
        if(!password) {
            return;
        }
    
        textarea.value = password;
        document.body. appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        alert('Password copied to clipboard!');
    });
}

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;

    //console.log('typesCount: ', typesCount);

    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    //console.log('typesArr: ', typesArr);

    if(typesCount === 0) {
        return '';
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            //console.log('funcName: ', funcName);

            generatedPassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

// generates random lower case letter (97 to 122 on http://net-comber.com/charset.html)
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// generates random upper case letter (65 to 90 on http://net-comber.com/charset.html)
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// generates random number (48 to 58 on http://net-comber.com/charset.html)
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// generates random symbol from a list (string) of symbols
function getRandomSymbol() {
    const symbols = '!@#$%^&*()/.,<>?{}[]';
    return symbols[Math.floor(Math.random() * symbols.length)];
}
