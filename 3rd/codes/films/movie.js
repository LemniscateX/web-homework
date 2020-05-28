var reverseBtns = document.querySelectorAll('button');

reverseBtns.forEach(btn => {
    btn.addEventListener('click', sendAlert);
});

function sendAlert(e) {
    var li = e.target.parentNode;
    var movieName = li.getElementsByClassName('title')[0].innerHTML;
    alert(reverseString(movieName));
}

function reverseString(str) {
    return str.split("").reverse().join("");
}


var names = document.querySelectorAll('p.title');
for (let i = 0; i < names.length; i++) {
    setTimeout(`changeColor(names[${i}])`, (i + 1) * 3000);
}

function changeColor(elem) {
    elem.style.color = 'red';
}