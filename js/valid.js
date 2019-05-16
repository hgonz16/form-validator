const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", () => {
            //toggle nav
        nav.classList.toggle("nav-active");

        //Animate Links
        navlinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

function checkLength(fieldID, msgId, maxLength, minLength ){
    if(typeof minLength == "undefined"){
        minLength = 1;
    }

    return function(){
        var fid = document.getElementById(fieldID),
            mid = document.getElementById(msgId),
            errMsg = "Must be between " + minLength + " and " + maxLength + " characters long";
        if(fid.value.length < minLength || fid.value.length > maxLength){
            mid.innerHTML = errMsg;
        }
        else{
            mid.innerHTML = "OK";
        }
    }
}

function typeLimit(){
    const msgEl = document.getElementById('msgLength')
    const countLimit = 500;
    const countTyped = document.getElementById('comment').value.length;
    const countLeft = countLimit - countTyped;

    if(countLeft > 0) {
        msgEl.innerHTML = `You have ${countLeft} characters left to type`;
    }
    else {
        const comment = document.getElementById('comment');
        msgEl.innerHTML = 'You have reach your limit';
        comment.value = comment.value.substr(0, countLimit - 1);
    }
}

function transCheck(){
    const childInput = Array.from(document.querySelectorAll('#trainGroup input'));

    strMsg1 = childInput.some(input => input.checked) ? 
      '' : 
      'you forgot to select a transportation.';

    document.getElementById('catch1').innerHTML = strMsg1;
} 

function groupCheck(){
    const childInput = Array.from(document.querySelectorAll('#genderGroup input'));
    // const strMsg = "You forgot to select a gender.";

    strMsg = childInput.some(input => input.checked) ? 
      '' : 
      'you forgot to select a gender.';
    
    // for(const i = 0; i < bntCheck.length; i++){
    //     if(bntCheck[i].checked == true){
    //         strMsg = "OK"
    //         break;
    //     }
    // }
    document.getElementById('catch').innerHTML = strMsg;
}  