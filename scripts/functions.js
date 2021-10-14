
const productContainer = document.querySelector('.main-container');
const buttonCategories = document.querySelector('.products-categories');
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
  }
  cart = getLocalStorage();
  displayCart(cart);
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
      return `<article class="cart-item" data-id="${item.id}">
          <ul class="item-detail">
            <li>${item.burger}</li>
            <li>${item.qty}</li>
            <li>$${item.price * item.qty}</li>
          </ul>
          <div class="btn-container">
            <button type="button" class="edit-btn">
              <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
              <i class="fas fa-trash"></i>
            </button>
          </div>
          </article>`;
    });
    itemCart = itemCart.join('');
    cartCard.innerHTML = itemCart;
    const deleteBtn = document.querySelectorAll('.delete-btn');
    // const editBtn = document.querySelectorAll('.edit-btn');
    deleteBtn.forEach(btn => btn.addEventListener('click', deleteItem));
    
  }
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  cartCard.removeChild(element);
  // remove from local storage
  removeFromLocalStorage(id);
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

// get Items 
function getLocalStorage() {
  return localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
}


