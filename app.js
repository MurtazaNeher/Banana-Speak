var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#txt-Input");
var txtOutput = document.querySelector("#txt-Output");
var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Sorry !!! Server down , try again after some time")
}

function clickEventHandler() {
    var inputTxt = txtInput.value;

    fetch(getTranslationUrl(inputTxt))
        .then(response => response.json())
        .then(json => {
            var translatedTxt = json.contents.translated;
            txtOutput.innerText = translatedTxt;
        })
        .catch(errorHandler)

};




btnTranslate.addEventListener("click", clickEventHandler)