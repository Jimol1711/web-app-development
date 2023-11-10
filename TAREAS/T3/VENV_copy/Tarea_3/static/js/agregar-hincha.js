// Datos de regiones y sus respectivas comunas. Fuente: https://gist.github.com/juanbrujo/0fd2f4d126b3ce5a95a7dd1f28b3d8dd#file-comunas-regiones-json
const regiones_y_comunas = {
    regiones: [
        {
            nombre: "Arica y Parinacota",
            comunas: ["Arica", "Camarones", "Putre", "General Lagos"]
        },
        {
            nombre: "Tarapacá",
            comunas: ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
        },
        {
            nombre: "Antofagasta",
            comunas: ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
        },
        {
            nombre: "Atacama",
            comunas: ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
        },
        {
            nombre: "Coquimbo",
            comunas: ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
        },
        {
            nombre: "Valparaíso",
            comunas: ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
        },
        {
            nombre: "Región del Libertador Gral. Bernardo O’Higgins",
            comunas: ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
        },
        {
            nombre: "Región del Maule",
            comunas: ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
        },
        {
            nombre: "Región de Ñuble",
            comunas: ["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"]
        },
        {
            nombre: "Región del Biobío",
            comunas: ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"]
        },
        {
            nombre: "Región de la Araucanía",
            comunas: ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"]
        },
        {
            nombre: "Región de Los Ríos",
            comunas: ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
        },
        {
            nombre: "Región de Los Lagos",
            comunas: ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
        },
        {
            nombre: "Región Aisén del Gral. Carlos Ibáñez del Campo",
            comunas: ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
        },
        {
            nombre: "Región de Magallanes y de la Antártica Chilena",
            comunas: ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
        },
        {
            nombre: "Región Metropolitana de Santiago",
            comunas: ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "Santiago", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
         }
    ]
};

// Deportes
const deportes = [
    "Adiestramiento ecuestre",
    "Atletismo",
    "Bádminton",
    "Balonmano",
    "Básquetbol",
    "Básquetbol 3x3",
    "Béisbol",
    "Boxeo",
    "Bowling",
    "Breaking",
    "Canotaje Slalom",
    "Canotaje de velocidad",
    "Ciclismo pista",
    "Ciclismo ruta",
    "Clavados",
    "Escalada deportiva",
    "Esgrima",
    "Esquí acuático y Wakeboard",
    "Fútbol",
    "Gimnasia artística Femenina",
    "Gimnasia artística Masculina",
    "Gimnasia rítmica",
    "Gimnasia trampolín",
    "Golf",
    "Hockey césped",
    "Judo",
    "Karate",
    "Levantamiento de pesas",
    "Lucha",
    "Maratón",
    "Marcha",
    "Mountain Bike",
    "Natación",
    "Natación artística",
    "Natación en Aguas abiertas",
    "Patinaje artístico",
    "Patinaje velocidad",
    "Pelota vasca",
    "Pentatlón moderno",
    "Polo acuático",
    "Racquetball",
    "Remo",
    "Rugby 7",
    "Salto ecuestre",
    "Skateboarding",
    "Sóftbol",
    "Squash",
    "Surf",
    "Taekwondo",
    "Tenis",
    "Tenis de mesa",
    "Tiro",
    "Tiro con arco",
    "Triatlón",
    "Vela",
    "Vóleibol",
    "Vóleibol playa"
  ];

// Modos de transporte
const transportes = [
    "particular",
    "locomoción pública"
]

// Selectores
const regionSelecter = document.getElementById("region");
const comunaSelecter = document.getElementById("comuna");
const transporteSelecter = document.getElementById("transporte");

// Selector dinámico de deportes
const deporteSelecter = document.getElementById("deporte");
const selectContainer = document.getElementById("select-container");
let selectCount = 0;
let select1, select2, select3;

function agregarSelector() {
    if (selectCount < 3) {
        const nuevoSelect = document.createElement("select");
        nuevoSelect.textContent = "Seleccione una opción";

        const opcionDefecto = document.createElement("option");
        opcionDefecto.textContent = "Seleccione una opción";
        opcionDefecto.textContent = "Seleccione una opción";
        nuevoSelect.appendChild(opcionDefecto);

        deportes.forEach((deporte) => {
            const opcionesSeleccionadas = [select1, select2, select3].map((select) => select ? select.value : null);
            if (!opcionesSeleccionadas.includes(deporte)) {
                const opcion = document.createElement("option");
                opcion.value = deporte;
                opcion.textContent = deporte;
                nuevoSelect.appendChild(opcion);
            }
        });

        deporteSelecter.appendChild(nuevoSelect);
        selectCount++;

        if (selectCount === 1) {
            select1 = nuevoSelect;
        } else if (selectCount === 2) {
            select2 = nuevoSelect;
        } else if (selectCount === 3) {
            select3 = nuevoSelect;
        }

        if (selectCount === 3) {
            // Deshabilitar la creación de más selectores después de tres
            deporteSelecter.removeEventListener("change", agregarSelector);
        }
    }
}

// Agregar un selector inicial
agregarSelector();
  
// Agregar un evento para crear un nuevo selector al seleccionar una opción
deporteSelecter.addEventListener("change", agregarSelector);

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

// Agregar opciones al selector de modos de transporte
transportes.forEach(transporte => {
    const option = document.createElement("option");
    option.text = transporte;
    option.value = transporte;
    transporteSelecter.appendChild(option);
  });

/* Validaciones */
// Todas las validaciones empiezan con la validación de que efectivamente se haya seleccionado uno opción. Las validaciones opcionales no tienen esta opción.

// Validación de Deporte
const validateSport = (sport) => {
    if(select1.textContent === "Seleccione una opción") return false;
    else return true;
};

// Validación de Región
const validateRegion = (region) => {
    if(region.textContent === "Seleccione una opción") return false;
    else return true;
};

// Validación de Comuna
const validateComuna = (comuna) => {
    if(comuna.textContent === "Seleccione una opción") return false;
    else return true;
};

// Validación de Modo de Transporte
const validateTransport = (transport) => {
    if(transport.textContent === "Seleccione una opción") return false;
    else return true;
};

// Validación del nombre de Hincha
const validateName = (name) => {
    if(!name) return false;
    let lengthValid = name.length >= 3 && name.length <= 80;
    // Validacion con expresión regular
    let re = /^[A-Za-z]+( [A-Za-z]+){1,2}$/;
    let formatValid = re.test(name);
    return lengthValid && formatValid;
};

// Validación del email
const validateEmail = (email) => {
    if(!email) return false;
    let lengthValid = email.length > 15;
    // Validacion con expresión regular
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let formatValid = re.test(email);
    return lengthValid && formatValid;
};

// Validación del número de teléfono
const validatePhonenumber = (phone_nmbr) => {
    let lengthValid = phone_nmbr.length <= 15 && phone_nmbr.length >= 9;
    // Validacion con expresión regular.
    let re = /^[0-9]+$/; 
    let formatValid = re.test(phone_nmbr);
    return lengthValid && formatValid;
};

// Validación del formulario
const validateForm = () => {
    let Form = document.forms["agregar-hincha"];
    let sport = Form["select-container"].textContent;
    let region = Form["region"].texContent;
    let comuna = Form["comuna"].textContent;
    let transport = Form["transporte"].textContent;
    let name = Form["name"].value;
    let email = Form["email"].value;
    let phoneNumber = Form["phone"].value;

    // Lista con inputs inválidos
    let invalidInputs = [];
    let isValid = true;
    const setInvalidInput = (inputName) => {
        invalidInputs.push(inputName);
        isValid &&= false;
    };

    // Validation logic
    if(!validateSport(sport)) {
        setInvalidInput("Deporte seleccionado");
    };
    if(!validateRegion(region)) {
        setInvalidInput("Región seleccionada");
    };
    if(!validateComuna(comuna)) {
        setInvalidInput("Comuna seleccionada");
    };
    if(!validateTransport(transport)) {
        setInvalidInput("Modo de transporte seleccionado");
    };
    if(!validateName(name)) {
        setInvalidInput("Nombre");
    }
    if (!validateEmail(email)) {
        setInvalidInput("Email");
    }
    if(!validatePhonenumber(phoneNumber)) {
        setInvalidInput("Número Telefónico");
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
        validationMessageElem.innerText = "Por favor indique una opción válida para:";
        validationBox.hidden = false;
    } else {
        let confirmResponse = confirm("¿Confirma el registro de este hincha?");
        
        if (confirmResponse) {
            alert("Hemos recibido el registro de Hincha. Muchas Gracias.");
            window.location.href = "index.html"; // Retorna al índice
        }
    }
};

let submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", validateForm);