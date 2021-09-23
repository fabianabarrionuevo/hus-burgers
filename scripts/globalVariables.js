/*Este archivon contiene las variables generales*/

const burgerOptions = `Elige tu burger favorita:
1) ${burgerTradicional.name}
2) ${burgerPollo.name}
3) ${burgerChedar.name}
4) ${burgerBrasas.name}
5) Volver
`;

const paymentOptions = `Elige el medio de pago:
1) Efectivo
2) Tarjeta de débito
3) Tarjeta de crédito
`;

const installmentOptions = `Elige la cantidad de cuotas:
1
2
3
`;

const selectedQuantity = "Ingresa la cantidad";

let cart = [];
let totalQuantityTradicional = 0;
let totalQuantityPollo = 0;
let totalQuantityChedar = 0;
let totalQuantityBrasas = 0;
let resp = "s";