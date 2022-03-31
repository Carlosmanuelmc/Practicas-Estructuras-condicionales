
    let edad, final;
    edad = prompt("ede?", "0");

    if (isNaN(edad)){
        final = "erro. no es un numero";
    }else{
        final = (edad < 18) ? "demasiado joven" :"mayor de edad";
    }
    document.write(final);