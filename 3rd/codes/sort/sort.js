const inputArea = document.getElementById('input');
const ascBtn = document.getElementById('asc');
const descBtn = document.getElementById('desc');
var outputArea = document.getElementById('output');

ascBtn.addEventListener('click', ascSort);
function ascSort(e) {
    clearOutputArea();
    var inputNums = inputArea.value.split(' ');
    if (areNumbers(inputNums)) {
        toNumArray(inputNums);
        var sortedNums = quickAscSort(inputNums);
        showResult(sortedNums);
    }
    else {
        showWraning();
    }
    clearInputArea();
}

descBtn.addEventListener('click', descSort);
function descSort(e) {
    clearOutputArea();
    var inputNums = inputArea.value.split(' ');
    if (areNumbers(inputNums)) {
        toNumArray(inputNums);
        var sortedNums = quickDescSort(inputNums);
        showResult(sortedNums);
    }
    else {
        showWraning();
    }
    clearInputArea();
}

function areNumbers(arr) {
    return !arr.some(isNaN);
}

function showResult(arr) {
    arr.forEach(elem => {
        outputArea.appendChild(document.createTextNode(elem + ' '));
    });
}

function showWraning() {
    alert('there exists NaN, please enter numbers.');
}

function clearOutputArea() {
    outputArea.innerHTML = '';
}

function clearInputArea() {
    inputArea.value = '';
}

function toNumArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
}

function quickAscSort(origArray) {
    if (origArray.length <= 1) {
        return origArray;
    } else {

        var left = [];
        var right = [];
        var newArray = [];
        var pivot = origArray.pop();
        var length = origArray.length;

        for (var i = 0; i < length; i++) {
            if (origArray[i] <= pivot) {
                left.push(origArray[i]);
            } else {
                right.push(origArray[i]);
            }
        }
        return newArray.concat(quickAscSort(left), pivot, quickAscSort(right));
    }
}

function quickDescSort(origArray) {
    if (origArray.length <= 1) {
        return origArray;
    } else {

        var left = [];
        var right = [];
        var newArray = [];
        var pivot = origArray.pop();
        var length = origArray.length;

        for (var i = 0; i < length; i++) {
            if (origArray[i] >= pivot) {
                left.push(origArray[i]);
            } else {
                right.push(origArray[i]);
            }
        }
        return newArray.concat(quickDescSort(left), pivot, quickDescSort(right));
    }
}