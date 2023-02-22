function validateForm() {
    var User=document.getElemntById("name").value;
    var password=document.getElemntById("password").value;
    if(name == "isaac" && password == "123") {
        //alert("usuario y contraseña validos")
        window.open('Valentines.html');
    } else {
        alert("intenta de nuevo");
    }
};