fetch('comunas-regiones.json')
.then(response => response.json())
.then(data => {
    const regionSelect = document.getElementById("region");
    const comunaSelect = document.getElementById("comuna");
    const deporteSelect = document.getElementById("deporte");
    const transporteSelect = document.getElementById("transporte");

    // Llena el menú desplegable de deportes
    const defaultDeporteOption = document.createElement("option");
    defaultDeporteOption.value = "";
    defaultDeporteOption.textContent = "Seleccione un deporte";
    deporteSelect.appendChild(defaultDeporteOption);

    // Llena el menú desplegable de deportes con opciones
    const deportes = [
        "Adiestramiento ecuestre",
        "Atletismo",
        "Bádminton",
        "Balonmano",
        "Básquetbol",
        "Básquetbol 3x3",
        "Béisbol",
        "BMX Freestyle",
        "BMX Racing",
        "Bowling",
        "Boxeo",
        "Breaking",
        "Canotaje de velocidad",
        "Canotaje Slalom",
        "Clavados",
        "Ciclismo pista",
        "Ciclismo ruta",
        "Clavados",
        "Escalada deportiva",
        "Esgrima",
        "Esquí acuático y Wakeboard",
        "Evento completo ecuestre",
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
        "Sofbol",
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
    ]

    deportes.forEach(deporte => {
        const option = document.createElement("option");
        option.value = deporte;
        option.textContent = deporte;
        deporteSelect.appendChild(option);
    });

    // Llena el menú desplegable de métodos de transporte
    const defaultTransporteOption = document.createElement("option");
    defaultTransporteOption.value = "";
    defaultTransporteOption.textContent = "Seleccione un modo de transporte";
    transporteSelect.appendChild(defaultTransporteOption);

    // Llena el menú desplegable de deportes con opciones
    const transportes = [
        "Particular",
        "Locomoción Colectiva",
    ]

    transportes.forEach(transporte => {
        const option = document.createElement("option");
        option.value = transporte;
        option.textContent = transporte;
        transporteSelect.appendChild(option);
    });

    // Llena el menú desplegable de regiones
    const defaultRegionOption = document.createElement("option");
    defaultRegionOption.value = "";
    defaultRegionOption.textContent = "Seleccione una región";
    regionSelect.appendChild(defaultRegionOption);
    
    // Llena el menú desplegable de regiones
    for (const regionInfo of data.regiones) {
        const option = document.createElement("option");
        option.value = regionInfo.region;
        option.textContent = regionInfo.region;
        regionSelect.appendChild(option);
    }

    // Función para actualizar las comunas basadas en la región seleccionada
    function updateComunas() {
        const selectedRegion = regionSelect.value;
        const selectedRegionInfo = data.regiones.find(regionInfo => regionInfo.region === selectedRegion);
        comunaSelect.innerHTML = ""; // Limpiar opciones anteriores
        const defaultComunaOption = document.createElement("option");
        defaultComunaOption.value = "";
        defaultComunaOption.textContent = "Seleccione una comuna";
        comunaSelect.appendChild(defaultComunaOption);
        selectedRegionInfo.comunas.forEach(comuna => {
            const option = document.createElement("option");
            option.value = comuna;
            option.textContent = comuna;
            comunaSelect.appendChild(option);
        });
    }

    // Asignar la función de actualización al evento onchange
    regionSelect.addEventListener("change", updateComunas);
})
.catch(error => console.error("Error al cargar el archivo JSON:", error));