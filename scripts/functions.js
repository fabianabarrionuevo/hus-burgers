
const productContainer = document.querySelector('.main-container');
const cartSection = document.querySelector('.cart-container');
const cartCard = document.querySelector('.cart');

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
          <li class="button-item"><button class="comprar" data-id="${item.classBurger}">comprar</button></li>
        </ul>
      </div>
    </article>`;
  });
  displayBurgers = displayBurgers.join('');
  productContainer.innerHTML = displayBurgers;

}

const buttonCategories = document.querySelector('.products-categories');

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
const addToCart = (product, quantity) => {
  const burgerSelected = burgerOptions.find(burger => burger.classBurger === product);
  if(inStock(quantity, burgerSelected.stock)){
    console.log(burgerSelected.stock);
    cart = localStorage.getItem('cart');

    if(!cart){
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }

    let item = {
      qty: quantity,
      price: quantity * burgerSelected.price, 
      burger: burgerSelected.burgerName
    };

      if(cart.some(elem => elem.burger == burgerSelected.burgerName)){
        cart.find(elem => {
          if(elem.burger == burgerSelected.burgerName){
            elem.qty += 1;
          }
        });
      } else {
        cart.push(item);
      }

    cart = JSON.stringify(cart);
    localStorage.setItem('cart', cart);
    burgerSelected.stock -= item.qty;
  }

}
//function that shows cart
const displayCart = (cart) => {
  cart = localStorage.getItem('cart');
  cart = JSON.parse(cart);
  if(!cart || cart.length <= 0){
    let messageContainer = document.createElement('p');
    let message = document.createTextNode("Aún no agregaste nada al carrito");
    messageContainer.append(message);
    cartCard.append(messageContainer);
    
  } else {
    let itemCart = cart.map(item => {
      return `<li>${item.burger}, ${item.qty}: ${item.price * item.qty}</li>`;
    });
    itemCart = itemCart.join('');
    cartCard.innerHTML = itemCart;

    // let totalPurchase = cart.reduce((total, item) => {
    //   return total += item.qty * item.price; 
    // }, 0)

    // let pTotal = document.createElement('p');
    // let totalCart = document.createTextNode(`El total de su compra es ${totalPurchase}`);
    // pTotal.append(totalCart);
    // cartCard.append(pTotal);

    // let resetButton = document.createElement('button');
    // resetButton.classList.add('resert-cart');
    // resetButton.innerHTML = "BORRAR";
    // cartCard.append(resetButton);
  }
}
//function that shows total cart
const displayTotal = (cart) => {
  cart = localStorage.getItem('cart');
  cart = JSON.parse(cart);
  let totalPurchase = cart.reduce((total, item) => {
    return total += item.qty * item.price; 
  }, 0)

  let pTotal = document.createElement('p');
  let totalCart = document.createTextNode(`El total de su compra es ${totalPurchase}`);
  pTotal.append(totalCart);
  cartCard.append(pTotal);
}


