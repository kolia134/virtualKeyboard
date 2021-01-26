

var input = document.createElement('input');
input.type = 'text';
input.name = 'text';
input.className = 'inputText'
document.body.appendChild(input);

function fun1() {
    console.log(this.innerHTML)
    input.value += this.innerHTML
}

let array = [];
for (var key in words) {
    array.push(key)
}
console.log(array)

for (let i = 0; i < array.length; i++) {
    
    document.querySelector(`.${array[i]}`).onclick =  fun1;
}
