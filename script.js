function getKey() {
    let keyInput = document.querySelector("#key-input").value;
    let key = 0;
    
    if(keyInput !== "") {
        for(let i = 0; i < 4; i++) {
            let asciiValue = keyInput.charCodeAt(i);
            key += asciiValue;
        }
        
        return key;
    } else {
        return 0;
    }
}

function keyCheck() {
    let keyInput = document.querySelector("#key-input").value;
    var keyError = document.querySelector("#key-error");
    
    if(keyInput.length == 4) {
        keyError.style.visibility = "hidden";
        enter();
    } else {
        keyError.style.visibility = "visible";
    }
}

function enter() {
    let result = "";
    let key = getKey();
    var inputValue = "";
    var toggleButton = document.querySelector("#toggle-btn");
    
    if(toggleButton.innerHTML == "Decrypt") {
        inputValue = document.querySelector("#enc-input").value;
    } else {
        key *= -1;
        inputValue = document.querySelector("#dec-input").value;
    }
    
    for(let i = 0; i < inputValue.length; i++) {
        result += String.fromCharCode(inputValue.charCodeAt(i) + key);
    }
    
    if(toggleButton.innerHTML == "Decrypt") {
        document.querySelector("#dec-input").value = result;
    } else {
        document.querySelector("#enc-input").value = result;
    }
}

function toggle() {
    var encryptInput = document.getElementById("enc-input");
    var decryptInput = document.getElementById("dec-input");
    var toggleButton = document.querySelector("#toggle-btn");
    var welcome = document.querySelector("#welcome-tag");
    var info = document.querySelector("#information");
    
    if (toggleButton.innerHTML == "Encrypt") {
        toggleButton.innerHTML = "Decrypt";
        toggleButton.style.background = "var(--accent)";
        toggleButton.style.boxShadow = "0 4px 14px rgba(0,0,0,0.3)";
        toggleButton.style.transition = "background-color 0.3s, box-shadow 0.3s, transform 0.2s";
        welcome.innerHTML = "Welcome to our Encryption Program!";

        decryptInput.disabled = true;
        encryptInput.disabled = false;
        } else {
        toggleButton.innerHTML = "Encrypt";
        toggleButton.style.background = "var(--accent)";
        toggleButton.style.boxShadow = "0 4px 14px rgba(0,0,0,0.3)";
        toggleButton.style.transition = "background-color 0.3s, box-shadow 0.3s, transform 0.2s";
        welcome.innerHTML = "Welcome to our Decryption Program!";

        decryptInput.disabled = false;
        encryptInput.disabled = true;
    }
    document.querySelector("#key-error").style.visibility = "hidden";
    toggleText();
}

function toggleText() {
    var toggleButton = document.querySelector("#toggle-btn");
    var encryptInfo = document.querySelector("#encryptInformation");
    var decryptInfo = document.querySelector("#decryptInformation");
    
    if(toggleButton.innerHTML == "Encrypt") {
        encryptInfo.style.display = 'none';
        decryptInfo.style.display = 'block';
    } else {
        encryptInfo.style.display = 'block';
        decryptInfo.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
const body = document.body;

const glowingCircle = document.createElement('div');
glowingCircle.classList.add('glowing-circle');
body.appendChild(glowingCircle);

function animateCircle() {
const maxWidth = window.innerWidth;
const maxHeight = window.innerHeight;

const randomX = Math.random() * maxWidth;
const randomY = Math.random() * maxHeight;

glowingCircle.style.left = `${randomX}px`;
glowingCircle.style.top = `${randomY}px`;
}

animateCircle();

setInterval(animateCircle, Math.random() * 2000 + 2000);
});