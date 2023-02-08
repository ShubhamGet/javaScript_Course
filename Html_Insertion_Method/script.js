//let a = document.getElementsByTagName('div')[0]
//a.innerHTML = a.innerHTML + '<h1>Hello World <h1>'

// Insertion method
let a = document.getElementsByTagName('div')[0]
let div = document.createElement('div');
div.innerHTML = '<h1>Hello World <h1>';
//a.appendChild(div);
//a.prepend(div);
//a.before(div)
//a.after(div)
//a.replaceWith(div)