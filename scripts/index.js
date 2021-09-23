alert("Bienvenido/a burger fan :)");

do{
  let burgerSelected = parseInt(prompt(burgerOptions));
  if(burgerSelected === 5) break;
  let quantity = parseInt(prompt(selectedQuantity));
  addToCart(burgerSelected, quantity);
  resp = prompt("Quieres agregar mas productos? S/N");
} while(resp === "s" || resp === "S");

let totalCart = cart.reduce((total, product) => {
  total += product.totalPrice;
  return total;
}, 0);

if(totalCart > 0){
  alert(showCart());
  let paymentOptionSelected = parseInt(prompt(paymentOptions));
  payment(paymentOptionSelected);
  if(paymentOptionSelected === 3){
    let installmentOptionsSelected = parseInt(prompt(installmentOptions));
    paymentCreditCard(installmentOptionsSelected);
  }
  alert("Gracias por tu compra! Nos vemos pronto!");
} else {
  alert("Gracias! Nos vemos pronto!");
}

