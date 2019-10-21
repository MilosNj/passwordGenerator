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
