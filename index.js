window.onload = function() {
    let myExcuseArray = [" el perro se comio mi tarea"," me quede dormido, no sono la alarma"," se fue el internet y no pude entrar a clase"," no tengo ganas", " no me presiones"]

    function getRandomElement() {
        return myExcuseArray [Math.floor(Math.random() * myExcuseArray.length)];
    }

    document.getElementById("excusa").innerHTML = getRandomElement()
}