var btnTranslate= document.querySelector('#btn-translate');
var txtInput=document.querySelector('#txt-input');
var outputDiv=document.querySelector('#output');

var plainText=txtInput;

var yodaUrl="https://api.funtranslations.com/translate/yoda.json?text=";

function getUrl(text){
    var url=yodaUrl+text;
    console.log("url:"+url);
    return url;
}

function errorHandler(error){
console.log(error+" error occured");
outputDiv.innerText=error;
}

function clickHandler(){
    console.log("click zala eree")
    // console.log(txtInput+txtInput.value);

    fetch(getUrl(txtInput.value))
    .then(response=>response.json()//{})
    .then(json=>{

        if(response.status===429){throw json.error.message}else{

        var translated=json.contents.translated;
        outputDiv.innerText=translated;
        console.log("answer: "+translated);}
    })
    .catch(errorHandler)
    );
}

btnTranslate.addEventListener("click", clickHandler);