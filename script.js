const input = document.querySelector('input');
input.addEventListener('blur', (event) => { 
  input.checkValidity();
  if (input.validity.valid){
    input.classList.remove('error');
  } else {
    input.classList.add('error');
  }
  })