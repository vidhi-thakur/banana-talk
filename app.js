var userInput = document.querySelector(".txt_input");
var btnTranslate = document.querySelector("#btn_input");
var userOutput = document.querySelector(".txt_output");

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function generateUrl(text) {
    return url+"?text="+text;
}

function errorhandler(error) {
    console.log("error occured"+error)
    alert("Something went wrong with server!")
}

function process(text) {

    console.log("clicked!")
    var inputText = userInput.value
    fetch(generateUrl(inputText)).then(response => response.json()).then(json => {
        var displayOutput = json.contents.translated
        userOutput.innerText = displayOutput
    }).catch(errorhandler)
    
}

btnTranslate.addEventListener("click",process(text))