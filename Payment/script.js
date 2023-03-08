let helloBtn = document.querySelector('button');
helloBtn.addEventListener('click', inputMsg);

function inputMsg(){
   let name = prompt('Enter name of Student');
    helloBtn.textContent = 'Name: ' + name;
}