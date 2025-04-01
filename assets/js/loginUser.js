function login(){
    var email = document.getElementById('txtEmail').value.trim();
    var password = document.getElementById('txtPassword').value.trim();
    var mensage = document.getElementById('mensageError');


    if(email == "" || password == "" || email !== "fulano@123" || password != "1234"){
        mensage.textContent = "Credenciais inválidas";
        mensage.style.color = "red";

    }else{
        alert("Seja bem-vindo!");
        window.location.href = "personalInformation.html"
    }

}