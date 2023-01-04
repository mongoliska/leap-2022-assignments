const emailTarget = document.querySelector('#email');
const passwordTarget = document.querySelector('#password');
const repasswordTarget = document.querySelector('#repassword');

const getFieldValues = () => {
    return {
        email: emailTarget.value,
        password: passwordTarget.value,
        repassword: repasswordTarget.value,
    };
};

const signupSubmit = () => {
    const values = getFieldValues();

    fetch('http://localhost:3333/api/signup', {
    method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }, 
        body:JSON.stringify(values),
    })
    .then((res) => res.json())
    .then((data) => {
        alert(data.message);
    })
    .catch((err) =>{
        alert(err.message);
    });
};

const UPPER_LETTER = 'ABCDEFGHIKLMNOPQRSTVXYZJUW';
const SPECIALS = '@$%!*#?&';
const LOWER_LETTER = UPPER_LETTER.toLowerCase();
const NUMBERS = '0123456789';


const passwordCheck = (password, repassword) => {
    let match =false;

    let containsUpper=false;
    let containsLower=false;
    let containsDigits=false;
    let containsChar=false;
    let lengthPassed=false;

    match=password===repassword;
    lengthPassed=password.length>=8;

    for (const char of password.split('')){
        if(!containsUpper) containsUpper=UPPER_LETTER.includes(char);
        if(!containsLower) containsLower=LOWER_LETTER.includes(char);
        if(!containsDigits) containsDigits=NUMBERS.includes(char);
        if(!containsChar) containsChar=SPECIALS.includes(char);
    }
    return {match, containsUpper, containsLower, containsChar, containsDigits, lengthPassed}
}

const upperTarget=document.querySelector('#upper');
const lowerTarget=document.querySelector('#lower');
const numberTarget=document.querySelector('#number');
const charTarget=document.querySelector('#char');
const lengthTarget=document.querySelector('#length');
const matchTarget=document.querySelector('#match');

passwordTarget.addEventListener("input", () => {
    const { password, repassword } = getFieldValues();
    const passwordInfo = passwordCheck(password, repassword);
  
    if (passwordInfo.containsUpper) {
      upperTarget.checked = true;
    } else {
      upperTarget.checked = false;
    }
  });
  passwordTarget.addEventListener("input", () => {
    const { password, repassword } = getFieldValues();
    const passwordInfo = passwordCheck(password, repassword);
  
    if (passwordInfo.containsLower) {
      lowerTarget.checked = true;
    } else {
      lowerTarget.checked = false;
    }
  });
  passwordTarget.addEventListener("input", () => {
    const { password, repassword } = getFieldValues();
    const passwordInfo = passwordCheck(password, repassword);
    if (passwordInfo.containsChar) {
      charTarget.checked = true;
    } else {
      charTarget.checked = false;
    }
  });
  passwordTarget.addEventListener("input", () => {
    const { password, repassword } = getFieldValues();
    const passwordInfo = passwordCheck(password, repassword);
  
    if (passwordInfo.containsDigits) {
      numberTarget.checked = true;
    } else {
      numberTarget.checked = false;
    }
  });
  passwordTarget.addEventListener("input", () => {
    const { password, repassword } = getFieldValues();
    const passwordInfo = passwordCheck(password, repassword);
    if (passwordInfo.lengthPassed) {
      lengthTarget.checked = true;
    } else {
      lengthTarget.checked = false;
    }
  });
  passwordTarget.addEventListener("input", () => {
    const { password, repassword } = getFieldValues();
    const passwordInfo = passwordCheck(password, repassword);
    if (passwordInfo.match) {
      matchTarget.checked = true;
    } else {
      matchTarget.checked = false;
    }
  });

  const submitBtn = document.querySelector('button');
  submitBtn.addEventListener('click', signupSubmit);
  
