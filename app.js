const keyChangeBtn = document.querySelector('#changeKey');
const readBtn = document.querySelector('#speak');
const code = document.querySelector('#code');
const input = document.querySelector('#uinput');
const submitBtn = document.querySelector('#btn');

//now if user click on ckange key button then

keyChangeBtn.addEventListener('click', function() {
    code.textContent = createCaptcha();
});

//also if window is refresed then

window.addEventListener('load', function(){
    code.textContent = createCaptcha();
});

//now lets create the function

function createCaptcha() {
    let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];

    let a = letters[Math.floor(Math.random() * letters.length)];
    let b = letters[Math.floor(Math.random() * letters.length)];
    let c = letters[Math.floor(Math.random() * letters.length)];
    let d = letters[Math.floor(Math.random() * letters.length)];
    let e = letters[Math.floor(Math.random() * letters.length)];
    let f = letters[Math.floor(Math.random() * letters.length)];
    let g = letters[Math.floor(Math.random() * letters.length)];

    let code = a+b+c+d+e+f+g;

    return code;

}


submitBtn.addEventListener('click', function(){
    let inpValue = input.value;
    if (inpValue == '') {
        alert('Please enetr the key');
    } else if(inpValue === code.textContent){
        alert('Valid Code Redirect Where You Want');
    } else {
        alert('Invalid Code! Try Again');
    }
});

//allright its working now lets work for sound

readBtn.addEventListener('click', function(){
    let text = code.textContent;
    responsiveVoice.speak(text);
});

//allright now its completed thanks for watching


//keep practicing

//happy coding :)