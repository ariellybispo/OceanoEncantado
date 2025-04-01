function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  let icon = document.querySelector('.icon');

  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  } else {
    menuMobile.classList.add('open');
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Outras funções e eventos
  const categoryList = document.querySelectorAll(".categorym_list");

  // Manipulador de evento para o clique no carrinho
  document.querySelector('.cart').addEventListener('click', function(event) {
    window.location.href = 'carrinho.html'; // Caminho para a página do carrinho
  });

  // Manipulador de evento para a função de menu mobile
  const menuButton = document.querySelector('.menu-button'); // Adapte para o botão específico
  if (menuButton) {
    menuButton.addEventListener('click', menuShow);
  }
  
  // Função para ajustar a quantidade de itens no carrinho
  const adjustQuantity = (increase) => {
    const quantityInput = document.getElementById('quantity');
    let currentQuantity = parseInt(quantityInput.value);
    
    if (increase) {
      quantityInput.value = currentQuantity + 1;
    } else {
      if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
      }
    }
    updateCartSummary(); // Atualizar o subtotal do carrinho
  };

  // Atualizar o subtotal do carrinho
  const updateCartSummary = () => {
    const quantity = document.getElementById('quantity').value;
    const subtotal = parseFloat(quantity * 100).toFixed(2); // Exemplo de preço fixo para simplificação
    document.querySelector('.subtotal-price').textContent = `Subtotal: R$ ${subtotal}`;
  };

  // Inicializa o subtotal
  updateCartSummary();

});
