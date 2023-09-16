// validacion formulario
const validarForm = () => {

    const formatoMail = (str) => /\d/.test(str);
    const formatoTelefono = (str) => /\d/.test(str);

    // funciones auxiliares
    const validadorRegion = (region) => region != "Seleccione una Región" // && region in regiones_y_comunas;
    // const validadorComuna = (comuna) => comuna != "Seleccione una Comuna" && comuna in comunas;
    const validadorTipo = (tipo) => tipo;
    const validadorNombre = (nombre) => nombre;
    const validadorMail = (mail) => mail && formatoMail(mail);
    const validadorTelefono = (telefono) => telefono && formatoTelefono(telefono);
  
    // obtener el fomulario del DOM por el ID
    // let loginForm = document.getElementById("login-form");
  
    // obtener inputs del DOM por el ID
    let regionSelection = document.getElementById("region")
    let emailInput = document.getElementById("email");
    let nameInput = document.getElementById("nombre");
    let phoneInput = document.getElementById("phone");
  
    let isValid = false;
    let msg = "";

    if (!validadorRegion(regionSelection.value)) {
        msg += "Seleccione una Región\n";
      }
  
    if (!validadorMail(emailInput.value)) {
      msg += "Ingrese una dirección de correo electrónica válida\n";
      emailInput.style.borderColor = "red"; // cambiar estilo con JS!!
    } else {
      emailInput.style.borderColor = "";
    }
  
    if (!validadorNombre(nameInput.value)) {
      msg += "Ingrese un nombre válido\n";
      nameInput.style.borderColor = "red";
    } else {
      nameInput.style.borderColor = "";
    }
  
    if (!validadorTelefono(phoneInput.value)) {
      msg += "Ingrese un número telefónico válido\n";
      phoneInput.style.borderColor = "red";
    } else {
      phoneInput.style.borderColor = "";
    }
  
    if (msg === "") {
      msg = "Felicidades ya tienes una cuenta!";
      isValid = true;
      // loginForm.submit();
  
      // no contamos con un backend, asi que de momento
      // utilizaremos el localStorage para dar la
      // sensacion de que nos hemos autentificado.
      let username = userNameInput.value;
      localStorage.setItem("username", username);
    }
    alert(msg); // alertas JS
  
    if (isValid) {
      window.location.href = "../html/confesiones.html";
    }
  };
  
  // recuperamos el boton que envia el form
  let submitBtn = document.getElementById("envio");
  submitBtn.addEventListener("click", validarForm);