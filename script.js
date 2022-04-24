//getting all the variables
const pwEl = document.getElementById('password');
const copy = document.getElementById('copy');
const lenEl = document.getElementById('len');
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
const generate = document.getElementById("generate");


// variable containing all possibles lower and upper letters, numbers and symbols
const upperletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = '!@#$%^&*()~:;?';

//generating random variables from the possible variables
function getlowercase (){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
};

function getuppercase (){
    return upperletters[Math.floor(Math.random() * upperletters.length)];
};

function getNumber () {
    return numbers[Math.floor(Math.random() * numbers.length)];
};

function getSymbol (){
    return symbols[Math.floor(Math.random() * symbols.length)];
};

function generatePassword (){
 const len = lenEl.value;

 let password = "";
//to pick a random upper case letter
 if(upper.checked){
     password += getuppercase();
}
//to pick a random lower case letter
if (lower.checked){
    password += getlowercase();
}
//to pick a random number 
if (number.checked){
    password += getNumber();
}

//to pick a random number 
if (symbol.checked){
    password += getSymbol();
}

for (let i = password.length; i < len; i++){
    const x = push_and_generate();
    password += x;
}

pwEl.innerText = password;
}

//push upper, lower, number or symbol into an array and generate of them
function push_and_generate(){
    const pw_array = [];
    
if (upper.checked){
    pw_array.push(getuppercase()); 
}
if (lower.checked){
    pw_array.push(getlowercase());
}

if (number.checked){
    pw_array.push(getNumber());
}

if (symbol.checked){
    pw_array.push(getSymbol());
}

if (pw_array.length === 0) return "";

return pw_array[Math.floor(Math.random() * pw_array.length )];


}

// adding a click event listner for the "generate password button"
generate.addEventListener("click", generatePassword);

copy.addEventListener("click", () => {
    const textarea = document.createElement('textarea');
    password = pwEl.innerText;

    if (!password) {
        return;
    }
    
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
})
