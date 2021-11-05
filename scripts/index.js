  $(document).ready(function (){
    // defino la url de mi API de datos
    const urlBurgers = 'https://mocki.io/v1/18001a00-2b03-45f5-942d-1a534125fe5f';
    //hago el llamado a mi API para traer los datos 
    $.getJSON(urlBurgers, (response, success) => {
      if (success === "success") {
  // funcion que muestra todas las variedades de burgers
        displayBurgerOptions(response);
      }
    });
    // displayBurgerOptions(burgerOptions);
     displayCategoriesButtons();
     displayCart();
  })
  

 
 