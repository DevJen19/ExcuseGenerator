window.onload = function() {
    let myExcuseArray = [" el perro se comio mi tarea",
    " me quede dormido, no sono la alarma",
    " se fue el internet y no pude entrar a clase",
    " no tengo ganas", 
    " no me presiones",
    " Ermesto Nedima me dijo que no lo hiciera",
    " un saludo para el admin del grupo",
    " solo tenias que seguir el maldito tren CJ",
    " missingNo",
    " I am Iron Man",
    " Requiescat in pace",
    " JavaScript",
    " 4Geeks Academy",
    " En la litera yo duermo abajo y arriba españa",
    " Su excusa no se esta cargando...",
    " No quise aprender css"]

    function getRandomElement() {
        return myExcuseArray [Math.floor(Math.random() * myExcuseArray.length)];
    }

    document.querySelector("#excusa").innerHTML = getRandomElement()
}