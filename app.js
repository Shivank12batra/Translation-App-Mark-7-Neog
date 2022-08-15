let button = document.getElementById('translate-btn');
let text = document.getElementById('input-text');
console.log(text.value);
let output = document.getElementById('output-text');

let url = 'https://api.funtranslations.com/translate/doge.json';

function urlConcatenate(input) {
    return url + '?' + 'text=' + input;
}

function errorHandler(error) {
    alert('something wrong with the server! please try again after some time!')
}

function clickHandler() {
    var inputText = text.value;

    // calling teh server for processing
    fetch(urlConcatenate(inputText)).then(response => response.json()).then(json => {
        var outputText = json.contents.translated;
        output.innerText = outputText;
    }).catch(errorHandler)
}

button.addEventListener('click', clickHandler);