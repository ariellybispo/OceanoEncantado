function saveProduct() {
    var product = document.getElementById('txtProducts').value;
    var description = document.getElementById('txtDescription').value;
    var categorie = document.getElementById('select-Categories').value;
    var color = document.getElementById('txtColor').value;
    var size = document.getElementById('txtSize').value;
    var price = document.getElementById('productValue').value;
    var supply = document.getElementById('quantity').value;
    var image = document.getElementById('fileInput').files[0]; 

    if (product == "" || description == "" || categorie == "" || color == "" || size == "" || price == "" || supply == "" || !image) {
        alert("Por favor, preencha todos os campos, incluindo a imagem.");
    } else {
        alert("Produto cadastrado com sucesso!");
        window.location.href = "productsList.html"; 
    }
}

function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById('preview').src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        alert("Insira uma imagem!");
    }
}
