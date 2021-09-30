
const productContainer = document.querySelector('.main-container');

//funcion que agrega dinamicamente cada item de burgers del array de productos.
console.log(burgerOptions);
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
            <button class="menos">-</button><span>1</span><button class="mas">+</button>
          </li>
          <li class="button-item">Pack de 360 g. <span>$${item.price}</span><br>
            <button class="menos">-</button><span>1</span><button class="mas">+</button>
          </li>
          <li class="button-item"><button class="comprar">comprar</button></li>
        </ul>
      </div>
    </article>`;
  });
  displayBurgers = displayBurgers.join('');
  productContainer.innerHTML = displayBurgers;
}

let buttonMas = document.getElementsByClassName('mas');
console.log(buttonMas);
