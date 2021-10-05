class Product {
  constructor(burgerName, category, classBurger, description, price, stock){
    this.burgerName = burgerName;
    this.category = category;
    this.classBurger = classBurger;
    this.description = description;
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


const burgerTradicional = new Product("Medallon Tradicional", 
  "Tradicional", 
  "tradicional" , 
  "Medallones de carne vacuna, con un porcentaje de grasa inferior al 10%. Cada pack trae 2 medallones.", 
  "140", 
  "100");
const burgerCarne = new Product("Medallones 100% carne vacuna", 
  "Bajo cero", 
  "bajoCero-carne",
  "Medallón elaborado con cortes de ternera 100% magro, bajo en calorías y cero grasas. Producto ideal para aquellas personas que eligen cuidarse comiendo rico.", 
  "140", 
  "100");
const burgerPollo = new Product("Medallones 100% pechuga de pollo", 
  "Bajo cero", 
  "bajoCero-pollo",
  "Medallón elaborado exclusivamente con pechuga de pollo, baja en calorías, cero grasas. Ideal para quienes busquen una nueva forma de consumir y disfrutar del sabor de la pechuga de pollo.", 
  "140", 
  "100");
const burgerParmesano = new Product("Parmesano", 
  "Gold", 
  "gold-parmesano", 
  "Medallón de carne vacuna con una combinación perfecta de queso parmesano. Ideal para quienes buscan nuevos sabores en una hamburguesa", 
  "160", 
  "50");
const burgerChedar = new Product("Cheese & Bacon", 
  "Gold", 
  "gold-bacon",
  "Medallón de carne vacuna con una perfecta combinación de queso cheddar y panceta. Ideal para aquellos que buscan encontrar todos los sabores en una sola hamburguesa.",
  "160", 
  "50");
const burgerBrasas = new Product("A las Brasas", 
  "Gold", 
  "gold-brasas",
  "Medallón elaborado con carne vacuna que genera la sensación de comer una hamburguesa recién sacada de la parrilla, un sabor que sólo esta hamburguesa puede alcanzar.",
  "160", 
  "50");
const burgerSweetPork = new Product("Sweet Pork",
  "Gold", 
  "gold-pork",
  "Medallón elaborado con pulpa de cerdo combinado con la cantidad justo de  manzana roja. Ideal para aquellas personas que buscan el sabor agridulce en las comidas.", 
  "160", 
  "50");
     
   