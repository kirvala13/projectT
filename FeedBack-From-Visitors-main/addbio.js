
let nameInput = document.querySelector('#name')
let surnameInput = document.querySelector('#surname')
let emailInput = document.querySelector('#email')
let textareaInput = document.querySelector('#textarea')

const button = document.querySelector('#btn')

let bioPlacehoder = document.querySelector('.bio-placeholder')

let file = document.querySelector('#imageFile')


  file.addEventListener('change', () => {
    let selectedFile = file.files[0]
    let currentUrl = URL.createObjectURL(selectedFile)



    //Button Listener
    button.addEventListener('click', (e)=> {

      e.preventDefault()
  
     let html = `
     <div class="newUser">
     <img src=${currentUrl} class="prevImage"> <br>
     Name : ${nameInput.value} <br>
     Surname : ${surnameInput.value} <br>
     Email : ${emailInput.value} <br>
     About Me : ${textareaInput.value} <br>
     </div>
     ` 
  
     bioPlacehoder.innerHTML += html 
  
  localStorage.setItem('newbio', bioPlacehoder.innerHTML)
      
  })
  
  })


let html = localStorage.getItem('newbio')
if(html) {
  bioPlacehoder.innerHTML = html
}



