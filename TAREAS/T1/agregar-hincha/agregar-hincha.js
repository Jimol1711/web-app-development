import { regiones_y_comunas } from "./regiones_comunas";

// Validación del email
const validateEmail = (email_addr) => {
    if(!email_addr) return false;
    let lenghtValid = email_addr.lenght > 15;
    // Validacion con expresión regular
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let formatValid = re.test(email_addr);
    return lenghtValid && formatValid;
}

// Validación del número de teléfono
const validatePhonenumber = (phone_nmbr) => {
    if(!phone_nmbr) return false;
    let lenghtValid = phone_nmbr.lenght <= 15 && phone_nmbr.lenght >= 9;
    // Validacion con expresión regular. Permite solo nùmero con un signo +, dos digitos como codigo de pais, un digito como codigo de zona y 8 digitos como el número en sí.
    // Es un formato que probablemente no aplique a todos los paises, pero si aplica a algunos (como Chile) y lo dejo para generalizar lo más posible.
    let re = /^\+\d{2}\d{1}\d{8}$/; 
    let formatValid = re.test(phone_nmbr);
    return lenghtValid && formatValid;
}

const regionSelecter = document.getElementById("region");
const comunaSelecter = document.getElementById("comuna");
const transporteSelecter = document.getElementById("transporte")

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