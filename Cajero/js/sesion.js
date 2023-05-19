function login(){
    var user, pass;

    user = document.getElementById ("nameUsuario").value;
    pass = document.getElementById ("Contraseña").value;

    if (user=="mali") {
        if (pass=="123456") {
            localStorage.setItem('User','mali')
            location="./pages/inicio.html"
        } else {
            alert("Error de contraseña")
            alert("Vuelva a intentarlo")
            location="./index.html"
        }
    } else if (user=="juan") {
        if (pass=="jp123456") {
            localStorage.setItem('User','juan')
            location="./pages/inicio.html"
        } else {
            alert("Error de contraseña")
            alert("Vuelva a intentarlo")
            location="./index.html"
        }
    } else if (user=="ana") {
        if (pass=="ana001") {
            localStorage.setItem('User','ana')
            location="./pages/inicio.html"
        } else {
            alert("Error de contraseña")
            alert("Vuelva a intentarlo")
            location="./index.html"
        }
    } else {
        alert("Error de usuario")
        alert("Vuelva a intentarlo")
        location="./index.html"
    }
    
}
