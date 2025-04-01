function entrarAdm(event){
    event.preventDefault();

    var email = document.getElementById("txtEmail").value;
    var senha = document.getElementById("txtSenha").value;

    if(email == "admin@gmail.com" && senha == "admin"){
        window.location.href = "landingADM.html";
    }
    else{
        alert("Usuário incorreto");
    }
}