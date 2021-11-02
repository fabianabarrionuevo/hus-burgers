class friendShops {
  constructor(shopName, address, googleLocation, image){
    this.shopName = shopName;
    this.address = address;
    this.googleLocation = googleLocation;
    this.image = image;
  }
}


//create local friends from the class

const aztaShop = new friendShops(
"Azta, Carnes y Sabores",
"Ruta E53, Villa Catalina, Córdoba.",
"https://www.google.com.ar/maps/place/Villa+Catalina/@-31.2066268,-64.2818206,17z/data=!4m12!1m6!3m5!1s0x9432835e15ac9799:0x13efa53613b4ef1a!2sVilla+Catalina!8m2!3d-31.2061542!4d-64.28034!3m4!1s0x9432835e15ac9799:0x13efa53613b4ef1a!8m2!3d-31.2061542!4d-64.28034",
"../multimedia/img/locales-amigos/local-amigo-aztra-logo.jpg"
);

const botanicoSur = new friendShops(
  "Botanico del sur",
  "Colectora 1686, Córdoba.",
  "https://www.google.com.ar/maps/place/Bot%C3%A1nico+Sur+club+de+padel/@-31.4683174,-64.1932417,17z/data=!4m13!1m7!3m6!1s0x9432a308948655fb:0xcf6995b23277d051!2sColectora+1686,+C%C3%B3rdoba!3b1!8m2!3d-31.468325!4d-64.1910575!3m4!1s0x9432a3f34800bb8f:0xac974739b5b52e74!8m2!3d-31.4689914!4d-64.1893695",
  "../multimedia/img/locales-amigos/local-amigo-botanico_del_sur-logo.jpg"
);

const botanico = new friendShops(
  "Botanico Padel",
  "Chancay 700, Córdoba.",
  "https://www.google.com.ar/maps/place/Club+Bot%C3%A1nico+-+Padel+%F0%9F%8E%BE/@-31.3866933,-64.2534095,17z/data=!4m13!1m7!3m6!1s0x94329f29aae33a5d:0xc7ef8bb18e72b221!2sChancay+700,+C%C3%B3rdoba!3b1!8m2!3d-31.3866979!4d-64.2512208!3m4!1s0x94329fa216cab819:0xacf3d5472883c1b!8m2!3d-31.3866979!4d-64.2512208",
  "../multimedia/img/locales-amigos/local-amigo-botanico_del_sur-logo.jpg"
);

const estanciasLucia = new friendShops(
  "Estancias Lucia",
  "Bv. Damian Garat 2726, Nuevo Poeta Lugones.",
  "https://www.google.com.ar/maps/place/Estancias+Lucia/@-31.3610674,-64.2094398,17z/data=!4m13!1m7!3m6!1s0x94329911d3e76a4b:0xf3fb127f96897064!2sDamian+Garat+2726,+X5008+C%C3%B3rdoba!3b1!8m2!3d-31.361072!4d-64.2072511!3m4!1s0x943299c13165d889:0xeab4519b596b7579!8m2!3d-31.361072!4d-64.2072511",
  "../multimedia/img/locales-amigos/local-amigo-estancias_lucia-icon.jpg"  
);

const proveedorGourmet = new friendShops(
  "Proveedor Gourmet",
  "Mesa y castro 1575, Barrio Yofre, Córdoba.",
  "https://www.google.com.ar/maps/place/Mesa+y+Castro+1575,+C%C3%B3rdoba/@-31.3900904,-64.1318455,19z/data=!4m13!1m7!3m6!1s0x943297d24e8d30e5:0xd71e7131382f2176!2sMesa+y+Castro+1575,+C%C3%B3rdoba!3b1!8m2!3d-31.3901625!4d-64.1313707!3m4!1s0x943297d24e8d30e5:0xd71e7131382f2176!8m2!3d-31.3901625!4d-64.1313707",
  "../multimedia/img/locales-amigos/local-amigo-proveedor_gourmet-icon.jpg"  
);

const encuentroDeSabores = new friendShops(
  "Encuentro de Sabores",
  "Av. Figueroa Alcorta 96, Córdoba.",
  "https://www.google.com.ar/maps/place/Encuentro+De+Sabores+Sandwiches/@-31.4126889,-64.193616,17z/data=!4m13!1m7!3m6!1s0x9432a281c6734ab1:0x42488e83930d9acc!2sAv.+Figueroa+Alcorta+96,+X5000KGP+C%C3%B3rdoba!3b1!8m2!3d-31.4126935!4d-64.1914273!3m4!1s0x9432998fe3ea1e8d:0xfa96317cb990e82a!8m2!3d-31.4129252!4d-64.1912807",
  "../multimedia/img/locales-amigos/local-amigo-encuentro_de_sabores-icon.jpg" 
);

const despensaAriel = new friendShops(
  "Despensa Ariel",
  "Soldado Ruiz 1807, Barrio San Martín, Córdoba.",
  "https://www.google.com.ar/maps/place/Soldado+Ruiz+1807,+X5008IAQ+C%C3%B3rdoba/@-31.3865127,-64.2015159,17z/data=!3m1!4b1!4m5!3m4!1s0x943298f6e1a147b1:0xd27f9c4e23717548!8m2!3d-31.3865173!4d-64.1993272",
  "../multimedia/img/locales-amigos/local-amigo-despensa_ariel-logo.jpg"  
);

const distribuidoraBR = new friendShops(
  "Distribuidora BR",
  "Bv. Los Granaderos 2368, Córdoba.",
  "https://www.google.com.ar/maps/place/Distribuidora+BR/@-31.3773854,-64.2077249,17.5z/data=!4m13!1m7!3m6!1s0x943298fce72fb479:0x8635d73f7b347f6!2sBv.+Los+Granaderos+2368,+C%C3%B3rdoba!3b1!8m2!3d-31.377371!4d-64.2053552!3m4!1s0x9432998cec9dc3bb:0x85f700de1e63f5b5!8m2!3d-31.3773101!4d-64.2053716",
  "../multimedia/img/locales-amigos/local-amigo-distribuidora_br-icon.jpg"  
);

const fiambreriaDelBoulevard = new friendShops(
  "Fiambreria del boulevard",
  "Bv. Pte. Arturo Umberto Illia 523, Córdoba.",
  "https://www.google.com.ar/maps/place/Fiambreria+del+boulevard/@-31.4225118,-64.1811424,17z/data=!4m13!1m7!3m6!1s0x9432a29098158053:0x86d4479b4959e07f!2sBlvd.+Pte.+Arturo+Umberto+Illia+523,+X5000ASF+C%C3%B3rdoba!3b1!8m2!3d-31.4225164!4d-64.1789537!3m4!1s0x9432a3df64ceca65:0x9dc6d70d7aeb55ac!8m2!3d-31.422532!4d-64.1789709",
  "../multimedia/img/locales-amigos/local-amigo-fiambreria_del_boule-icon.jpg"  
);

const huevosCamperos = new friendShops(
  "Huevos Camperos",
  "Independencia 1181, Nueva Córdoba, Córdoba.",
  "https://www.google.com.ar/maps/place/Huevos+Camperos+verduleria+Nva+Cba/@-31.4296028,-64.1918399,17z/data=!4m13!1m7!3m6!1s0x9432a28bfd5903cf:0xa0a9ae1e8b95a844!2sIndependencia+1181,+C%C3%B3rdoba!3b1!8m2!3d-31.4296074!4d-64.1896512!3m4!1s0x9432a3adc7f28377:0x7d7ff22f22bd7255!8m2!3d-31.4296088!4d-64.189759",
  "../multimedia/img/locales-amigos/local-amigo-huevos_camperos-icon.jpg"
);

const islaBonita = new friendShops(
  "La Isla bonita",
  "Av. Bulnes y Alem.",
  "https://www.google.com.ar/maps/place/Lomitos+LA+ISLA/@-31.3993735,-64.1715749,19z/data=!4m13!1m7!3m6!1s0x9432980d4d8e5325:0x378f9bc0dbad717d!2sBoulevard+Bulnes+%26+Avenida+Leandro+N.+Alem,+C%C3%B3rdoba!3b1!8m2!3d-31.3996677!4d-64.1711364!3m4!1s0x9432980d542be2dd:0xe678921a4e9cca66!8m2!3d-31.3992473!4d-64.1711754",
  "../multimedia/img/locales-amigos/local-amigo-la_isla_bonita-icon.jpg"  
);
      
const toriPollo = new friendShops(
  "Tori Pollo",
  "Av. 24 de Septiembre 1798, Barrio General Paz, Córdoba.",
  "https://www.google.com.ar/maps/place/Tori+Pollo/@-31.4122569,-64.1601744,20z/data=!4m13!1m7!3m6!1s0x9432a2a6014c34d3:0xe00673b24fa3cd44!2sAv.+24+de+Septiembre+1800,+X5004FTV+C%C3%B3rdoba!3b1!8m2!3d-31.4122483!4d-64.1600054!3m4!1s0x9432a31b8deb6723:0xadfa1074543ec735!8m2!3d-31.4123079!4d-64.1600074",
  "../multimedia/img/locales-amigos/local-amigo-tori_pollo-icon.jpg"  
);  

const fiambreriaLaCalera = new friendShops(
  "Fiambreria La Calera",
  "Eva Perón 454, Barrio Industrial, La Calera, Córdoba.",
  "https://www.google.com.ar/maps/place/C.+Eva+Per%C3%B3n+454,+La+Calera,+C%C3%B3rdoba/@-31.3566068,-64.3428189,17z/data=!3m1!4b1!4m5!3m4!1s0x942d6200e197d36b:0xb8fda712e9216533!8m2!3d-31.3566114!4d-64.3406302",
  "../multimedia/img/locales-amigos/local-amigo-la_calera-icon.jpg" 
);

const shellSantaRosa = new friendShops(
  "SHELL",
  "Villa Santa Rosa",
  "https://www.google.com.ar/maps/place/Shell/@-31.1544499,-63.4113638,16z/data=!4m13!1m7!3m6!1s0x94331a04ab072f75:0x9c495e7644a3e7fa!2sVilla+Santa+Rosa,+C%C3%B3rdoba!3b1!8m2!3d-31.1534602!4d-63.3994554!3m4!1s0x94331a1c24e566bd:0x59139c5838b2e817!8m2!3d-31.1547812!4d-63.4088082",
  "../multimedia/img/locales-amigos/local-amigo-shell-icon.jpg"
);       

//save local friends in an Array
let shops = [aztaShop, botanicoSur, botanico, estanciasLucia, proveedorGourmet, encuentroDeSabores, despensaAriel, distribuidoraBR, fiambreriaDelBoulevard, huevosCamperos, islaBonita, toriPollo, fiambreriaLaCalera, shellSantaRosa];


const shopsContainer = document.querySelector('.friendShop');

//function that dynamically shows the local friends stored in array
function displayFriendShops(shops) {
  let displayShops = shops.map(item =>{
    console.log(item);
    return `<article class="shop">
    <a href=${item.googleLocation}>
    <img class="shop-img" src=${item.image} alt="foto comercio ${item.shopName}">
    <h4 class="shop-title">${item.shopName}</h4>
      <i class="fas fa-map-marker-alt"></i>
      <p>${item.address}</p>
    </a>
  </article>`;
  
  });
  displayShops = displayShops.join('');
  shopsContainer.innerHTML += displayShops;
}

displayFriendShops(shops);