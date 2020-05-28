const inputArea = document.querySelector('#inputArea');
const addBtn = document.querySelector('#add');
const selectBtn = document.querySelector('#select');
const deselectBtn = document.querySelector('#deselect');
const deleteBtn = document.querySelector('#delete');
const outputBlock = document.querySelector('#outputBlock');
const liParents = outputBlock.getElementsByTagName('li');

addBtn.addEventListener('click', addStuff);
selectBtn.addEventListener('click', select);
deselectBtn.addEventListener('click', deselect);
deleteBtn.addEventListener('click', deleteStuff);

function addStuff(e) {
    const inputText = inputArea.value;

    if (inputText === '') {
        // alert('Please fill in the field')
    } else {
        const todo = document.createElement('li');
        
        // Add checkbox to li
        const check = document.createElement('input');
        check.type = 'checkbox';
        todo.appendChild(check);
        
        // Add text to li
        const text = document.createTextNode(inputText);
        todo.appendChild(text);

        // Add li element to outputBlock
        outputBlock.appendChild(todo);

        // Clear input field
        inputArea.value = '';
    }
   
}

function select(e) {
    for (let item of liParents) {
        item.childNodes[0].checked = true;
    }
}

function deselect(e) {
    for (let item of liParents) {
        item.childNodes[0].checked = false;
    }
}

function deleteStuff(e) {
    [...liParents].
        filter(item => item.childNodes[0].checked === true).
        forEach(selected => selected.remove());
}

document.addEventListener('keydown', function(e) {
    const len = liParents.length;
    if (len === 0) return;
    if (e.key === 'ArrowUp') {
        var i = [...liParents].findIndex(item => item.classList.contains('keyFocus'));
        i = i === -1 ? len : i;
        liParents[(len + i - 1) % len].classList.add('keyFocus');
        liParents[(len + i) % len].classList.remove('keyFocus');
    }
    if (e.key === 'ArrowDown') {
        const i = [...liParents].findIndex(item => item.classList.contains('keyFocus'));
        liParents[(len + i + 1) % len].classList.add('keyFocus');
        liParents[(len + i) % len].classList.remove('keyFocus');
        
    }
    if (e.key === 'Enter') {
        [...liParents].filter(item => item.classList.contains('keyFocus'))
            .forEach(item => item.childNodes[0].checked = !item.childNodes[0].checked);
    }
    if (e.key === 'Escape') {
        [...liParents].forEach(item => item.classList.remove('keyFocus'));
    }
});