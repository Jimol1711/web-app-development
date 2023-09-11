import { regiones_y_comunas } from "./regiones_comunas";

const regionSelecter = document.getElementById("region");
const comunaSelecter = document.getElementById("comuna");
const transporteSelecter = document.getElementById("transporte");

// Agregar opciones al selector de regiones
regiones_y_comunas.regiones.forEach(region => {
    const option = document.createElement("option");
    option.value = region.nombre;
    option.text = region.nombre;
    regionSelecter.add(option);
  });

// Función para actualizar el selector de comunas según la región seleccionada
regionSelecter.addEventListener("change", () => {
    const nombreregionSelected = regionSelecter.value;
    
    // Buscar la región correspondiente
    const regionSelected = regiones_y_comunas.regiones.find(region => region.nombre === nombreregionSelected);
  
    // Actualizar el selector de comunas con las comunas de la región
    comunaSelecter.innerHTML = "";
    regionSelected.comunas.forEach(comuna => {
      const option = document.createElement("option");
      option.text = comuna;
      comunaSelecter.add(option);
    });
  });

// Validaciones

// Validación del email
const validateEmail = (email_addr) => {
    if(!email_addr) return false;
    let lenghtValid = email_addr.lenght > 15;
    // Validacion con expresión regular
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let formatValid = re.test(email_addr);
    return lenghtValid && formatValid;
};

// Validación del número de teléfono
const validatePhoneNumber = (phone_nmbr) => {
    if(!phone_nmbr) return false;
    let lenghtValid = phone_nmbr.lenght <= 15 && phone_nmbr.lenght >= 9;
    // Validacion con expresión regular. Permite solo nùmero con un signo +, dos digitos como codigo de pais, un digito como codigo de zona y 8 digitos como el número en sí.
    // Es un formato que probablemente no aplique a todos los paises, pero si aplica a algunos (como Chile) y lo dejo para generalizar lo más posible.
    let re = /^\+\d{2}\d{1}\d{8}$/; 
    let formatValid = re.test(phone_nmbr);
    return lenghtValid && formatValid;
};

// Validación de las imagenes de la artesanía
const validateFiles = (artesania_imgs) => {
    if (!artesania_imgs) return false;
    let lengthValid = 1 <= artesania_imgs.lenght && artesania_imgs <= 3;
    let typeValid = true;
    for (const img of artesania_imgs) {
        let fileFamily = file.type.split("/")[0];
        typeValid &&= fileFamily == "image" || img.type == "application/pdf";
    };
    return lenghtValid && typeValid;
};

// Validación del formulario
const validateForm = () => {
    let myForm = document.forms["agregar-artesano"];
    let email = myForm["email_addr"].value;
    let phoneNumber = myForm["phone_nmbr"].value;
    let files = myForm["artesania_imgs"].value;

    let invalidInputs = [];
    let isValid = true;
    const setInvalidInput = (inputName) => {
        invalidInputs.push(inputName);
        isValid &&= false;
    };

    // Validation logic
    if (!validateEmail(email)) {
        setInvalidInput("Email");
    }
    if(!validatePhoneNumber(phoneNumber)) {
        setInvalidInput("Número Telefónico");
    }
    if (!validateFiles(files)) {
        setInvalidInput("Imágenes");
    }

    // Display validation
    let validationBox = document.getElementById("val-box");
    let validationMessageElem = document.getElementById("val-msg");
    let validationListElem = document.getElementById("val-list");

    if (!isValid) {
        validationListElem.textContent = "";
        for (input of invalidInputs) {
            let listElement = document.createElement("li");
            listElement.innerText = input;
            validationListElem.append(listElement);
        }
        validationMessageElem.innerText = "Los siguientes campos son inválidos:";
        validationBox.hidden = false;
    } else {
        myForm.submit();
    }
};

let submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", validateForm);