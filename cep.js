/*
   CEP Brazil
*/

var cep = "01001000";
var request = new XMLHttpRequest();
var api = `https://viacep.com.br/ws/${cep}/json/`;
    
request.open("GET", api);
request.onload = () => console.log(JSON.parse(request.responseText));
request.send();
