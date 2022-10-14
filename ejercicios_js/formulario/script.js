function Registrar(){

    var nombre = document.getElementsByName("nombre")[0].value;
    var apellido = document.getElementsByName("apellido")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var contraseña = document.getElementsByName("contraseña")[0].value;

    var v_nombre = document.getElementById("validar_nombre");
    var v_apellido = document.getElementById("validar_apellido");
    var v_email = document.getElementById("validar_email");
    var v_contraseña = document.getElementById("validar_contraseña");

    console.log(nombre)
    console.log(email)

    if(!/^[A-Za-zÁÉÍÓÚáéíóúÑñ]*$/.test(nombre) || nombre === ""){
        v_nombre.innerHTML = "Datos inválidos"
    }else{
        v_nombre.innerHTML = "Validado ✔"

    }if(!/^[A-Za-zÁÉÍÓÚáéíóúÑñ]*$/.test(apellido) || apellido === ""){
        v_apellido.innerHTML = "Datos inválidos"
    }else{
        v_apellido.innerHTML = "Validado ✔"

    }if (!/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        v_email.innerHTML = "datos inválidos"

    }else{
        v_email.innerHTML = "Validado ✔"

    }if(!/^[A-Za-z0-9ÁÉÍÓÚáéíóú$_]*$/.test(contraseña) || contraseña === ""){
        v_contraseña.innerHTML = "Datos inválidos"

    }else{
        v_contraseña.innerHTML = "Validado ✔"

    }
    
}

