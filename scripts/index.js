
// funcion que muestra todas las variedades de burgers
  displayBurgerOptions(burgerOptions);
  displayCategoriesButtons();
  displayCart(cart);

const btnComprar = document.querySelectorAll('.comprar');
  btnComprar.forEach(btn => {
    btn.addEventListener('click', function(e){
      const classBurgerSelected = e.currentTarget.dataset.id;
      addToCart(classBurgerSelected, 1);
      displayCart(cart);
      displayTotal(cart);
    });
  });

