
// This is my javascript code
document.querySelector('form').onsubmit = function(){
    // Setting up our html DOM
    let inputValue = document.getElementById('question');
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    let myValue = inputValue.value;
     if(myValue.length < 1){
       alert('Please enter an input field!')
     } 
     else{
        li.innerHTML = inputValue.value;
        ul.appendChild(li);
        inputValue.value = '';
     }

    return false

}

