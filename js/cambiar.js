var esNoche = 0;
function noche(){
    if(esNoche % 2 == 0){
        console.log("Es de noche");
        document.body.style.backgroundColor = "#1F1E1F";
        esNoche +=1
    }
    else{
        console.log("Es de día");
        document.body.style.backgroundColor = "#FFFFFF";
        esNoche+=1;
    }
}
