document.title = "iniciar sesion";


//crear ek cibtenedor principal para el forumlario
const container = document.createElement('div');
container.style.margin = '20px';


//crear titulo
const title = document.createElement('h2');
title.textContent = 'Iniciar sesion';
container.appendChild(title);

//crear el formulario
const form = document.createElement('form');

//crear campo de nombre de usuario
const usernamelabel = document.createElement('label');
usernamelabel.textContent = 'Nombre de usuario';
const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.required = true;
form.appendChild(usernamelabel);
form.appendChild(usernameInput);

//crear campo de nombre de usuario
const passwordlabel = document.createElement('label');
passwordlabel.textContent = 'contraseña';
const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.required = true;
form.appendChild(passwordlabel);
form.appendChild(passwordInput);

//crear el boton de envio
const submitButton = document.createElement('button');
submitButton.textContent = 'Iniciar sesion';
form.appendChild(submitButton);


//Mensaje de respuesta
const message = document.createElement('p');
container.appendChild(form);
container.appendChild(message);

//agregarel contenedor al cuerpo el documento
document.body.appendChild(container);

//DATOS DE INICIO DE SESION PREDEFINIDA
const validaUser = 'Juanito';
const validaPassword = '3333';

//valdiar el use y el pass
form.addEventListener('submit', (event) => {
    event.preventDefault();

    //Validar el nombre y el passs
    if(usernameInput.value === validaUser && passwordInput.value === validaPassword ) {
        message.textContent = 'BIENVENIDO';
        message.style.color = 'green'
    }else{
        message.textContent = 'Nombre de usuario o contraseña incorrecto';
        message.style.color = 'red';
    }

    //limpiar lo winput
    usernameInput.value = ' ';
    usernameInput.value = ' ';
});