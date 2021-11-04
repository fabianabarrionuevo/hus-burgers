
const productContainer = document.querySelector('.main-container');
const buttonCategories = document.querySelector('.products-categories');
const cartBody = document.querySelector('.tbody-cart');
const cartFooter = document.querySelector('.footer-cart');
const cartCounter = document.querySelector('.cart-counter');
const sendOrderForm = document.querySelector('.send-order-form');
const btnSenOrder = document.querySelector('.send-order-btn');


//function that dynamically adds each burger item from the product array.
function displayBurgerOptions(burgers) {
  let displayBurgers = burgers.map(item =>{
    return `<article class="item-${item.classBurger}">
      <div class="item">
        <div class="item__image"></div>
      </div>
      <div class="description">
        <h4>${item.burgerName}</h4>
        <hr>
        <p>${item.description}</p>
        <ul class="button-list">
          <li class="button-item">Pack de 240 g. <span>$${item.price}</span><br></li>
          <li class="button-item"><button class="comprar" data-id="${item.classBurger}">agregar</button></li>
        </ul>
      </div>
    </article>`;
  });
  displayBurgers = displayBurgers.join('');
  productContainer.innerHTML = displayBurgers;

  const btnComprar = document.querySelectorAll('.comprar');
  btnComprar.forEach(btn => {
    btn.addEventListener('click',addToCart);
  });

}

//function that dynamically adds buttons to filter product categories
function displayCategoriesButtons() {
  //create an array with categories
  const categories = burgerOptions.reduce(function(values, item){
    if(!values.includes(item.category)){
      values.push(item.category);
    }
    return values;
  }, ['todos']);

  //create the HTML for the buttons
  const categoryBtn = categories.map(category => {
    return ` <button class="filter-btn" type="button" data-id="${category}">
              ${category}
            </button>`
  })
  .join('');
  //add the buttons to the container
  buttonCategories.innerHTML = categoryBtn;

  const filterBtns = document.querySelectorAll('.filter-btn');

  //add event listener on click to filter the products
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function(e){
      const category = e.currentTarget.dataset.id;
      const productsByCategory = burgerOptions.filter(burger => {
        if(burger.category === category){
          return burger;
        };
      });
      if(category == 'todos'){
        displayBurgerOptions(burgerOptions);
      } else {
        displayBurgerOptions(productsByCategory);
      }
    });
  });

}

const inStock = (quantity, stock) => {
  if(quantity > stock) {
    alert(`Ups, ya no tenemos esa cantidad, lo disponible es ${stock}`);
    return false;
  } 
  else return true;
}

//function that adds products to cart
const addToCart = (e) => {
  e.preventDefault();
  const classBurgerSelected = e.currentTarget.dataset.id;
  const burgerSelected = burgerOptions.find(burger => burger.classBurger === classBurgerSelected);
  let quantity = 1;
  if(inStock(quantity, burgerSelected.stock)){
    addToLocalStorage(classBurgerSelected, burgerSelected.burgerName, burgerSelected.price, quantity);
    burgerSelected.stock -= quantity;
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${burgerSelected.burgerName} 
      Producto agregado`,
      showConfirmButton: false,
      timer: 1000,
      background: '#151719',
    });
  }
  displayCart();
}


//function that shows cart
const displayCart = () => {
  let cart = getLocalStorage();
  showTotals(cart);
  if(!cart || cart.length <= 0){
    let emptyCart = `<td colspan="3"><p>Aún no agregaste nada al carrito</p></td>`;
    cartBody.innerHTML = emptyCart;
    const totalPrice = ``;
    cartFooter.innerHTML = totalPrice;
  } else {
    let itemCart = cart.map(item => {
      return `<tr>
                <td class="td-name">${item.burger}</td>
                <td class="td-qty">${item.qty}</td>
                <td class="td-price">$${item.price}</td>
                <td>
                  <button type="button" class="delete-btn fas fa-trash" data-id="${item.id}">
                  </button>
                </td>
              </tr>`;
    });
    itemCart = itemCart.join('');
    cartBody.innerHTML = itemCart;
    const deleteBtn = document.querySelectorAll('.delete-btn');
    deleteBtn.forEach(btn => btn.addEventListener('click', (e) => deleteItem(e)));
  }
}

//function that shows total cart and total items
const showTotals = (cart) => {
  let totalCart = cart.reduce((total, item) => {
    total += item.price * item.qty;
    return total;
  }, 0);

  if(totalCart > 0){
    const totalPrice = `<tr><td colspan="3">El total de su compra es $${totalCart}</td></tr>
                        <tr><td colspan="1"><button type="button" class="end-cart">finalizar compra</button></td>
                            <td colspan="1"><button type="button" class="reset-cart">vaciar carrito</button></td>
                        </tr>`; 
    cartFooter.innerHTML = totalPrice;
    let endCart = document.querySelector('.end-cart');
    endCart.addEventListener('click', endOrder);
    let resetCart = document.querySelector('.reset-cart');
    resetCart.addEventListener('click', cleanCart);
    btnSenOrder.addEventListener('click', e => sendOrder(e));
  }

  let amountOfItems = cart.reduce((totalItems, item) => {
    totalItems += item.qty;
    return totalItems;
  }, 0);
  cartCounter.innerHTML = amountOfItems;
}

const endOrder = () => {
  sendOrderForm.classList.add("active");
}


const sendOrder = (e) => {
  e.preventDefault();
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: `Muchas gracias por tu compra! 
    A la brevedad nos pondremos en contacto para enviar tu pedido.`,
    showConfirmButton: false,
    timer: 4000,
    background: '#fefbf9',
  });
  sendOrderForm.classList.remove("active");
  cleanCart();
}


//function that delete all items
const cleanCart = () => {
  localStorage.clear();
  displayCart();
}

//function that delete items from cart
function deleteItem(e) {
  e.preventDefault();
  let producto, productoID;
  if(e.target.classList.contains('delete-btn')){
    e.target.parentElement.parentElement.remove();
    producto = e.target.parentElement.parentElement;
    productoID = producto.querySelector('button').getAttribute('data-id');
  }
  // remove from local storage
  removeFromLocalStorage(productoID);
  cart = getLocalStorage();
  displayCart(cart);
}

// **** LOCAL STORAGE ****
// set Item
function addToLocalStorage(id, burger, price, qty) {
  let itemToadd = {id, burger, price, qty};
  let items = getLocalStorage();
  if(items.some(elem => elem.burger == itemToadd.burger)){
    items.find(elem => {
      if(elem.burger == itemToadd.burger){
        elem.qty += 1;
      }
    });
  } else {
    items.push(itemToadd);
  }
  localStorage.setItem('cart', JSON.stringify(items));
}

// get Items 
function getLocalStorage() {
  return localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
}

// remove Item
function removeFromLocalStorage(id){
  let items = getLocalStorage();
  items = items.filter(item => {
    if(item.id !== id){
      return item;
    }
  })
  localStorage.setItem('cart', JSON.stringify(items));
}
// //edit item from localStorage
// function editLocalStorage(id, value){
//   let items = getLocalStorage();
//   items = items.map(item => {
//     if(item.id === id){
//       item.value = value;
//     }
//     return item;
//   });
//   localStorage.setItem('list', JSON.stringify(items));
// }

