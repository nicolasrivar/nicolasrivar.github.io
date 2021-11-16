function validar(){

    document.formulario.nombre.setAttribute('style', '');
    document.formulario.apellido.setAttribute('style', '');
    document.formulario.edad.setAttribute('style', '');
    document.formulario.email.setAttribute('style', '');

    var n = document.formulario.nombre.value.trim();

    if (!n || n > 30){
        alert("El nombre ingresado debe contener menos de 30 caracteres");
        document.formulario.nombre.setAttribute('style', 'border: 2px solid red;');
        return false;
    }

    var a = document.formulario.apellido.value.trim();

    if (!a || a > 30){
        alert("El apellido ingresado debe contener menos de 30 caracteres");
        document.formulario.apellido.setAttribute('style', 'border: 2px solid red;');
        return false;
    }
    
    var e = document.formulario.edad.value.trim();

    if (!e || isNaN(e)){
        alert("Debe ingresar un numero entre 13 y 99");
        document.formulario.edad.setAttribute('style', 'border: 2px solid red;');
        return false;
    }

    var m = document.formulario.email.value.trim();

    if (!m || !m.includes("@")){
        alert("El email ingresado no es correcto");
        document.formulario.email.setAttribute('style', 'border: 2px solid red;');
        return false;
    }
    alert("Datos enviados correctamente");
    return true;
    
}