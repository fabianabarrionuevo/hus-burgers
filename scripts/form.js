const orderForm = document.querySelector(".send-order-form");
const inputs = document.querySelectorAll('.send-order-form input');

// regular expressions to validate inputs
const regEx = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[a-zA-Z0-9-.]+$/,
  telephone: /^\d{7,14}$/,
  payment: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
}

//initial value for field validation
const campos = {
  name: false,
  email: false,
  tel: false,
  payment: false
}

//function to validate the form
const validateForm = (e) => {
  switch(e.target.name){
    case "name":
      if(regEx.name.test(e.target.value)){ 
        document.getElementById('group_name').classList.remove('form-group-incorrecto');
        document.getElementById('group_name').classList.add('form-group-correcto');
        campos['name'] = true;
      } else {
        document.getElementById('group_name').classList.add('form-group-incorrecto');
        document.getElementById('group_name').classList.remove('form-group-correcto');
        document.getElementById('error-message-name').classList.add('error-message-incorrecto');
        campos['name'] = false;
      }
    break;
    case "email":
      if(regEx.email.test(e.target.value)){ 
        document.getElementById('group_email').classList.remove('form-group-incorrecto');
        document.getElementById('group_email').classList.add('form-group-correcto');
        campos['email'] = true;
      } else {
        document.getElementById('group_email').classList.add('form-group-incorrecto');
        document.getElementById('group_email').classList.remove('form-group-correcto');
        document.getElementById('error-message-email').classList.add('error-message-incorrecto');
        campos['email'] = false;
      }
    break;
    case "tel":
      if(regEx.telephone.test(e.target.value)){ 
        document.getElementById('group_tel').classList.remove('form-group-incorrecto');
        document.getElementById('group_tel').classList.add('form-group-correcto');
        campos['tel'] = true;
      } else {
        document.getElementById('group_tel').classList.add('form-group-incorrecto');
        document.getElementById('group_tel').classList.remove('form-group-correcto');
        document.getElementById('error-message-tel').classList.add('error-message-incorrecto');
        campos['tel'] = false;
      }
    break;
    case "payment":
      if(regEx.payment.test(e.target.value)){ 
        document.getElementById('group_payment').classList.remove('form-group-incorrecto');
        document.getElementById('group_payment').classList.add('form-group-correcto');
        campos['payment'] = true;
      } else {
        document.getElementById('group_payment').classList.add('form-group-incorrecto');
        document.getElementById('group_payment').classList.remove('form-group-correcto');
        document.getElementById('error-message-payment').classList.add('error-message-incorrecto');
        campos['payment'] = false;
      }
    break;
  }
}

//event listeners for the inputs
inputs.forEach((input) => {
  input.addEventListener('keyup', validateForm);
  input.addEventListener('blur', validateForm);
})

//event listener for the submit
orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if(campos.name && campos.email && campos.tel && campos.payment){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Muchas gracias por tu compra! 
      A la brevedad nos pondremos en contacto para enviar tu pedido.`,
      showConfirmButton: false,
      timer: 4000,
      background: '#fefbf9',
    });
    orderForm.reset();
    sendOrderForm.classList.remove("active");
    cleanCart();
  }

});