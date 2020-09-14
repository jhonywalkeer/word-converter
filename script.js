
let container = document.querySelector('.text-input');
let upperBtn = document.getElementById('upperBtn');
let lowerBtn = document.getElementById('lowerBtn');
let titleBtn = document.getElementById('titleBtn');
let vowelBtn = document.getElementById('vowelBtn');
let consoBtn = document.getElementById('consoBtn');
let clearBtn = document.getElementById('clear');

let text = document.getElementById('conBox');
let regex = /[^a-zA-Z0-9]|\s+/g;
let regexVow = /[aeiou]/g;

// Upper case

upperBtn.addEventListener('click', () => {
  text.value = text.value.toUpperCase();
});

// Lower case

lowerBtn.addEventListener('click', () => {
  text.value = text.value.toLowerCase();
});


// Title case

titleBtn.addEventListener('click', () => {
  let arr = text.value.split('');
  arr[0] = arr[0].toUpperCase();

  for(let i = 0; i < arr.length; i++){
    if(arr[i]===' '){
      arr[i+1] = arr[i+1].toUpperCase();
    }
  }

  text.value = arr.join('');
});


// Vowel case

vowelBtn.addEventListener('click', () => {
  let arr = text.value.split('');

  for(let i = 0; i < arr.length; i++){
    if(regexVow.test(arr[i])){
      arr[i] = arr[i].toUpperCase();
    }
  }

  text.value = arr.join('');
});


// Conso case

consoBtn.addEventListener('click', () => {
  let arr = text.value.split('');

  for(let i = 0; i < arr.length; i++){
    if(!regexVow.test(arr[i])){
      arr[i] = arr[i].toUpperCase();
    }
  }

  text.value = arr.join('');
});

// Copy the text

function copyText() {

    let copyTheText = document.getElementById("conBox");
        copyTheText.select();
        copyTheText.setSelectionRange(0,9999);
        document.execCommand('copy');
}

// Clear the text

clearBtn.addEventListener('click', () => {
    text.value = '';
  });


