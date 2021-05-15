var userInput = document.querySelector(".txtInOut");
var btnTranslate = document.querySelector("#btn_input");
var userOutput = document.querySelector(".txt_output");

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function generateUrl(text) {
    return url+"?text="+text;
}

function errorhandler(error) {
    alert("Something went wrong with server!")
}

function process() {
    // var inputText = userInput.value
    console.log(userInput.value)
    fetch(generateUrl(userInput.value)).then(response => response.json()).then(json => {
        var displayOutput = json.contents.translated
        userOutput.innerText = displayOutput
    }).catch(errorhandler)
    
}

btnTranslate.addEventListener("click",process)