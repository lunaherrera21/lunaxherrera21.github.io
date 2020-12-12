function sendMessage(){
    nombre = document.getElementById("user_name").value;
    msj = document.getElementById("msj").value;
    if( nombre ==  "" || msj == ""){
         alert("Completa todos los campos");
    } else if(validarlongitud(sendMessage) == false){
     return false;
    }
    else{
        var par = document.getElementById("p");
        var newContentName = document.createTextNode("-" + nombre);
        var newContentMsj = document.createTextNode(": " + msj);
        par.appendChild(newContentName);
        par.appendChild( newContentMsj);
    }
}

function validarlongitud(){
    if(msj.length > 200 ){
        alert ("Máximo 200 caracteres");
        return false;
    }
}


