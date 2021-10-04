
const productContainer = document.querySelector('.main-container');

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
          <li class="button-item">Pack de 240 g. <span>$${item.price}</span><br>
            <button class="cart-btn menos">-</button><span>1</span><button class="cart-btn mas">+</button>
          </li>
          <li class="button-item">Pack de 360 g. <span>$${item.price}</span><br>
            <button class="cart-btn menos">-</button><span>1</span><button class="cart-btn mas">+</button>
          </li>
          <li class="button-item"><button class="comprar">comprar</button></li>
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
