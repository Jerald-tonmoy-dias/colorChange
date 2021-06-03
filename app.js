// color store
var colors = ['red', 'blue', 'teal', 'tomato', 'aqua'];

var colorName = document.querySelector('h2');
var btn = document.querySelector('button');

btn.addEventListener('click', function () {
    var randomNumbar = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[randomNumbar];
    colorName.innerText = colors[randomNumbar];



});