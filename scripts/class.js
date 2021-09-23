class Producto {
  constructor(name, price, stock){
    this.name = name;
    this.price = parseFloat(price);
    this.stock = parseInt(stock);
  }

  inStock(quantity) {
    if(quantity > this.stock) {
      alert(`Ups, ya no tenemos esa cantidad, lo disponible es ${this.stock}`);
      return false;
    } 
    else return true;
  }
}

const burgerTradicional = new Producto("Tradicional", "140", "100");
const burgerPollo = new Producto("Pollo", "140", "100");
const burgerChedar = new Producto("Chedar & Bacon", "160", "50");
const burgerBrasas = new Producto("A las Brasas", "160", "50");

