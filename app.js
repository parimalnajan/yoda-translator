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
console.log(" error occured"+error);
alert('A server error occured, please try later');
outputDiv.innerText=error;
}

function clickHandler(){
    //console.log("click test")
    // console.log(txtInput+txtInput.value);

    fetch(getUrl(txtInput.value))
    .then(response=>response.json()//{})
    .then(json=>{
        if(response.status===429){
            throw json.error.message;
        }else{
        var translated=json.contents.translated;
        console.log("answer: "+translated);}
        outputDiv.innerText=translated;
    })
    .catch(errorHandler)
    );
}

btnTranslate.addEventListener("click", clickHandler);