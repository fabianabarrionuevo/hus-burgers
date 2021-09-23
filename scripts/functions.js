
/*Funcion que agrega al carrito los productos seleccionados */
const addToCart = (option, quantity) => {
  switch(option){
    case 1:
      if(burgerTradicional.inStock(quantity)){
        cart.push({name: burgerTradicional.name, quantity: quantity, totalPrice: quantity * burgerTradicional.price});
        burgerTradicional.stock -= quantity;
        alert(`Burger/s tradicional agregada/s: ${quantity}`);
      }
      break;

    case 2:
      if(burgerPollo.inStock(quantity)){
        cart.push({name: burgerPollo.name, quantity: quantity, totalPrice: quantity * burgerPollo.price});
        burgerPollo.stock -= quantity;
        alert(`Burger/s de pollo agregada/s: ${quantity}`);
      }
      break;
    
    case 3:
      if(burgerChedar.inStock(quantity)){
        cart.push({name: burgerChedar.name, quantity: quantity, totalPrice: quantity * burgerChedar.price});
        burgerChedar.stock -= quantity;
        alert(`Burger/s chedar & bacon agregada/s: ${quantity}`);
      }
      break;

    case 4:
      if(burgerBrasas.inStock(quantity)){
        cart.push({name: burgerBrasas.name, quantity: quantity, totalPrice: quantity * burgerBrasas.price});
        burgerBrasas.stock -= quantity;
        alert(`Burger/s a las brasas agregada/s: ${quantity}`);
      }
      break;
    
      default:
        alert("Opcion no valida");

  }
  return true;
}

/*Funcion que muestra el detalle del carrito */
const showCart = () => {
  let cartDetail = "Detalle de su compra: \n";
    cart.forEach(product => {
    cartDetail += product["name"] + ": " + product.quantity + "\n";
  });
  return cartDetail;
}

/*Funcion que calcula el monto a pagar dependiendo el medio de pago seleccionado*/ 
const payment = (paymentOption) => {
  if(paymentOption == 1){
    alert("Pagando en efectivo tenes descuento del 10%");
    totalCart *= 0.90;
    alert(`Total a abonar en efectivo $ ${totalCart}`);
  } else if (paymentOption == 2){
    alert(`Total a debitar $ ${totalCart}`);
  } else {
    alert(`Total a pagar $ ${totalCart}, hasta en 3 cuotas sin interés`);
  }
}

/*Funcion que calcula el monto de cada cuota en pagos con tarjetas de credito*/
const paymentCreditCard = (installment) => {
  switch(installment){
    case 1:
      alert(`Su total es de $${totalCart}, en 1 cuota`);
      break;
      case 2:
      alert(`Su total es de $${totalCart}, en 2 cuotas de ${Math.round(totalCart/installment * 100)/100}`);
      break;
      case 3:
      alert(`Su total es de $${totalCart}, en 3 cuotas de ${Math.round(totalCart/installment * 100)/100}`);
      break;
      default:
      alert(`Disponible solo hasta 3 cuotas sin interés`);
  }
}