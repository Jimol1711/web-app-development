const regiones_y_comunas = {
    regiones: [
        {
            nombre: "Región Arica y Parinacota",
            comunas: ["Gral. Lagos", "Putre", "Arica", "Camarones"]

        },
        {
            nombre: "Región de Tarapacá",
            comunas: ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
        },
        {
            nombre: "Región de Antofagasta",
            comunas: ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollague", "San Pedro Atacama", "Tocopilla", "Maria Elena"]
        },
        {
            nombre: "Región de Atacama",
            comunas: ["Copiapo", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
        },
        {
            nombre: "Región de Coquimbo ",
            comunas: ["La Higuera", "La Serena", "Vicuña", "Paihuano", "Coquimbo", "Andacollo", "Rio Hurtado", "Ovalle", "Monte Patria", "Punitaqui", "Combarbala", "Mincha", "Illapel", "Salamanca", "Los Vilos"]
        },
        {
            nombre: "Región de Valparaíso",
            comunas: ["Petorca", "Cabildo", "Papudo", "La Ligua", "Zapallar", "Putaendo", "Santa Maria", "San Felipe", "Pencahue", "Catemu", "Llay Llay", "Nogales", "La Calera", "Hijuelas", "La Cruz", "Quillota", "Olmue", "Limache", "Los Andes", "Rinconada", "Calle Larga", "San Esteban", "Puchuncavi", "Quintero", "Viña del Mar", "Villa Alemana", "Quilpue", "Valparaiso", "Juan Fernandez", "Casablanca", "Concon", "Isla de Pascua", "Algarrobo", "El Quisco", "El Tabo", "Cartagena", "San Antonio", "Santo Domingo"]

        },
        {
            nombre: "Región del Libertador Bernardo Ohiggins",
            comunas: ["Mostazal", "Codegua", "Graneros", "Machali", "Rancagua", "Olivar", "Doñihue", "Requinoa", "Coinco", "Coltauco", "Quinta Tilcoco", "Las Cabras", "Rengo", "Peumo", "Pichidegua", "Malloa", "San Vicente", "Navidad", "La Estrella", "Marchigue", "Pichilemu", "Litueche", "Paredones", "San Fernando", "Peralillo", "Placilla", "Chimbarongo", "Palmilla", "Nancagua", "Santa Cruz", "Pumanque", "Chepica", "Lolol"]

        },
        {
            nombre: "Región del Maule",
            comunas: ["Teno", "Romeral", "Rauco", "Curico", "Sagrada Familia", "Hualañe", "Vichuquen", "Molina", "Licanten", "Rio Claro", "Curepto", "Pelarco", "Talca", "Pencahue", "San Clemente", "Constitucion", "Maule", "Empedrado", "San Rafael", "San Javier", "Colbun", "Villa Alegre", "Yerbas Buenas", "Linares", "Longavi", "Retiro", "Parral", "Chanco", "Pelluhue", "Cauquenes"]

        },
        {
            nombre: "Región del Ñuble",
            comunas: ["Cobquecura", "Ñiquen", "San Fabian", "San Carlos", "Quirihue", "Ninhue", "Trehuaco", "San Nicolas", "Coihueco", "Chillan", "Portezuelo", "Pinto", "Coelemu", "Bulnes", "San Ignacio", "Ranquil", "Quillon", "El Carmen", "Pemuco", "Yungay", "Chillan Viejo"]

        },
        {
            nombre: "Región del Biobío",
            comunas: ["Tome", "Florida", "Penco", "Talcahuano", "Concepcion", "Hualqui", "Coronel", "Lota", "Santa Juana", "Chiguayante", "San Pedro de la Paz", "Hualpen", "Cabrero", "Yumbel", "Tucapel", "Antuco", "San Rosendo", "Laja", "Quilleco", "Los Angeles", "Nacimiento", "Negrete", "Santa Barbara", "Quilaco", "Mulchen", "Alto Bio Bio", "Arauco", "Curanilahue", "Los Alamos", "Lebu", "Cañete", "Contulmo", "Tirua"]

        },
        {
            nombre: "Región de La Araucanía",
            comunas: ["Renaico", "Angol", "Collipulli", "Los Sauces", "Puren", "Ercilla", "Lumaco", "Victoria", "Traiguen", "Curacautin", "Lonquimay", "Perquenco", "Galvarino", "Lautaro", "Vilcun", "Temuco", "Carahue", "Melipeuco", "Nueva Imperial", "Puerto Saavedra", "Cunco", "Freire", "Pitrufquen", "Teodoro Schmidt", "Gorbea", "Pucon", "Villarrica", "Tolten", "Curarrehue", "Loncoche", "Padre Las Casas", "Cholchol"]

        },
        {
            nombre: "Región de Los Ríos",
            comunas: ["Lanco", "Mariquina", "Panguipulli", "Mafil", "Valdivia", "Los Lagos", "Corral", "Paillaco", "Futrono", "Lago Ranco", "La Union", "Rio Bueno"]

        },
        {
            nombre: "Región de Los Lagos",
            comunas: ["San Pablo", "San Juan", "Osorno", "Puyehue", "Rio Negro", "Purranque", "Puerto Octay", "Frutillar", "Fresia", "Llanquihue", "Puerto Varas", "Los Muermos", "Puerto Montt", "Maullin", "Calbuco", "Cochamo", "Ancud", "Quemchi", "Dalcahue", "Curaco de Velez", "Castro", "Chonchi", "Queilen", "Quellon", "Quinchao", "Puqueldon", "Chaiten", "Futaleufu", "Palena", "Hualaihue"]

        },
        {
            nombre: "Región Aisén del General Carlos Ibáñez del Campo",
            comunas: ["Guaitecas", "Cisnes", "Aysen", "Coyhaique", "Lago Verde", "Rio Ibañez", "Chile Chico", "Cochrane", "Tortel", "O'Higins"]

        },
        {
            nombre: "Región de Magallanes y la Antártica Chilena",
            comunas: ["Torres del Paine", "Puerto Natales", "Laguna Blanca", "San Gregorio", "Rio Verde", "Punta Arenas", "Porvenir", "Primavera", "Timaukel", "Antartica"]

        },
        {
            nombre: "Región Metropolitana de Santiago ",
            comunas: ["Tiltil", "Colina", "Lampa", "Conchali", "Quilicura", "Renca", "Las Condes", "Pudahuel", "Quinta Normal", "Providencia", "Santiago", "La Reina", "Ñuñoa", "San Miguel", "Maipú", "La Cisterna", "La Florida", "La Granja", "Independencia", "Huechuraba", "Recoleta", "Vitacura", "Lo Barrenechea", "Macul", "Peñalolén", "San Joaquín", "La Pintana", "San Ramon", "El Bosque", "Pedro Aguirre Cerda", "Lo Espejo", "Estacion Central", "Cerrillos", "Lo Prado", "Cerro Navia", "San José de Maipo", "Puente Alto", "Pirque", "San Bernardo", "Calera de Tango", "Buin", "Paine", "Peñaflor", "Talagante", "El Monte", "Isla de Maipo", "Curacavi", "María Pinto", "Melipilla", "San Pedro", "Alhué", "Padre Hurtado"]

         }
    ]
};

// Modos de transporte
const transportes = [
    "particular",
    "locomoción pública"
]

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

// Agregar opciones al selector de modos de transporte
transportes.forEach(transporte => {
    const option = document.createElement("option");
    option.text = transporte;
    option.value = transporte;
    transporteSelecter.appendChild(option);
  });

