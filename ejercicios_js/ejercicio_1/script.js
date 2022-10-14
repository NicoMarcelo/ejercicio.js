function EnviarDatos(){
    var n1 = document.getElementsByName("nota1")[0].value;
    var n2 = document.getElementsByName("nota2")[0].value;
    var n3 = document.getElementsByName("nota3")[0].value;
    var n4 = document.getElementsByName("nota4")[0].value;
    var n5 = document.getElementsByName("nota5")[0].value;

    var validar_nota1 = document.getElementById("validar_nota1");
    var validar_nota2 = document.getElementById("validar_nota2");
    var validar_nota3 = document.getElementById("validar_nota3");
    var validar_nota4 = document.getElementById("validar_nota4");
    var validar_nota5 = document.getElementById("validar_nota5");

    var promedio = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3)+parseFloat(n4)+parseFloat(n5))/5;
    var promedio2 = (promedio).toFixed(1);
    var nota_final = document.getElementById("promedio");

    if(n1 === ""){
        validar_nota1.innerHTML = "(Ingrese nota número 1)";return

    }else if(n2 === ""){
        validar_nota2.innerHTML = "(Ingrese nota número 2)";return

    }else if(n3 === ""){
        validar_nota3.innerHTML = "(Ingrese nota número 3)";return

    }else if(n4 === ""){
        validar_nota4.innerHTML = "(Ingrese nota número 4)";return

    }else if(n5 === ""){
        validar_nota5.innerHTML = "(Ingrese nota número 5)";return

    }



    if(isNaN(n1) || n1 <= 0 || n1 > 7.0){
        validar_nota1.innerHTML = "ERROR. Nota 1 inválida.";return

    }else{
        validar_nota1.innerHTML = "✔";

    }if(isNaN(n2) || n2 <= 0 || n2 > 7.0){
        validar_nota2.innerHTML = "ERROR. Nota 2 inválida.";return

    }else{
        validar_nota2.innerHTML = "✔";

    }if(isNaN(n3) || n3 <= 0 || n3 > 7.0){
        validar_nota3.innerHTML = "ERROR. Nota 3 inválida.";return

    }else{
        validar_nota3.innerHTML = "✔";

    }if(isNaN(n4) || n4 <= 0 || n4 > 7.0){
        validar_nota4.innerHTML = "ERROR. Nota 4 inválida.";return

    }else{
        validar_nota4.innerHTML = "✔";

    }if(isNaN(n5) || n5 <= 0 || n5 > 7.0){
        validar_nota5.innerHTML = "ERROR. Nota 5 inválida.";return

    }else{
        validar_nota5.innerHTML = "✔";
    }

    nota_final.innerHTML = "Tu promedio es:"+promedio2


}