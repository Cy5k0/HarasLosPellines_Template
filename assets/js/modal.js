const caballos = [
  {
    // on documentation must be "Pending"
    // if its pending or not exist father o mother, put XX or XY
    // the fathers and mothers url are below the horses list
    // 0
    nombre: "Agatha",
    genero: "Female", // Hembra
    fechaNacimiento: "xx/xx/xxxx",
    padre: "XY",
    madre: "XX",
    documentacion: "Pending",
    detalles: "",
    imagenes: ["assets/img/imgsins/Agatha/agatha.jpg"],
  },
  {
    // 1
    nombre: "Alma",
    genero: "Female", // Hembra
    fechaNacimiento: "Pending",
    padre: "XY",
    madre: "XX",
    documentacion: "Pending",
    detalles: "",
    imagenes: ["assets/img/imgsins/Alma/HLP-Alma.jpg"],
  },
  {
    // 3
    nombre: "Angela",
    genero: "Female",
    fechaNacimiento: "06/26/2018",
    padre: "HP Ali",
    madre: "Sweet Enya",
    documentacion: "assets/doc/Angela.pdf",
    detalles: "",
    imagenes: ["assets/img/imgsins/Angela/angela.jpg"],
  },
  {
    // 4
    nombre: "Aston",
    genero: "Male", // Macho
    fechaNacimiento: "Pending",
    padre: "Caballo XY",
    madre: "Caballo XX",
    documentacion: "Pending",
    detalles: "",
    imagenes: ["assets/img/imgsins/Aston/Aston.jpg"],
  },
  {
    // 5
    nombre: "Charles",
    genero: "Male", // Macho
    fechaNacimiento: "Pending",
    padre: "XY",
    madre: "XX",
    documentacion: "Pending",
    detalles: "",
    imagenes: ["assets/img/imgsins/Charles/Charles.jpg"],
  },
  {
    // 6
    nombre: "HLP-Charlotte",
    genero: "Female", // Hembra
    fechaNacimiento: "Pending",
    padre: "XY",
    madre: "XX",
    documentacion: "Pending",
    detalles: "",
    imagenes: [
      "assets/img/imgsins/Charlotte/Charlotte_01.jpg",
      "assets/img/imgsins/Charlotte/charlotte_02.jpg",
    ],
  },
  {
    // 7
    nombre: "Dominiko",
    genero: "Male", // Macho
    fechaNacimiento: "Pending",
    padre: "XY",
    madre: "XX",
    documentacion: "Pending",
    detalles: "",
    imagenes: [
      "assets/img/imgsins/Domeniko/domeniko01.jpg",
      "assets/img/imgsins/Domeniko/domeniko02.jpg",
    ],
  },
  {
    // 8
    nombre: "Emily",
    genero: "Female", // Hembra
    fechaNacimiento: "09-24-2021",
    padre: "Shangrila Baltazar",
    madre: "HP Colomba - TE",
    documentacion: "assets/doc/Emily.pdf",
    detalles: "",
    imagenes: [
      "assets/img/imgsins/Emily/emily01.jpg",
      "assets/img/imgsins/Emily/emily02.jpg",
      "assets/img/imgsins/Emily/emily03.jpg",
    ],
  },
  {
    // 9
    nombre: "Johara",
    genero: "Female", // Hembra
    fechaNacimiento: "10-28-2015",
    padre: "HP Shahmaan",
    madre: "HP Jadda - TE",
    documentacion: "assets/doc/Shangrila_Johara.pdf",
    detalles: "",
    imagenes: [
      "assets/img/imgsins/Johara/johara.jpg",
      "assets/img/imgsins/Johara/johara_01.jpg",
    ],
  },
  {
    // 10
    nombre: "Martina",
    genero: "Female", // Hembra
    fechaNacimiento: "Pending",
    padre: "XY",
    madre: "XX",
    documentacion: "./assets/doc/Shangrila_Martina.pdf",
    detalles: "",
    imagenes: [
      "assets/img/imgsins/Martina/martina02.jpg",
      "assets/img/imgsins/Martina/martina01.jpg",
    ],
  },
  {
    // 11
    nombre: "Melika",
    genero: "Female", // Hembra
    fechaNacimiento: "01-19-2019",
    padre: "HP Ali",
    madre: "HP Sarah Te",
    documentacion: "assets/doc/HP_Melinka.pdf",
    detalles: "",
    imagenes: [
      "assets/img/imgsins/Melika/melika01.jpg",
      "assets/img/imgsins/Melika/melika02.jpg",
      "assets/img/imgsins/Melika/melika03.jpg",
    ],
  },
  {
    // 12
    nombre: "Promessaa",
    genero: "Female", // Hembra
    fechaNacimiento: "05-12-2014",
    padre: "Pogrom",
    madre: "ZT Macja",
    documentacion: "assets/doc/Promessa.pdf",
    detalles: "",
    imagenes: [
      "assets/img/imgsins/Promessaa/promessaa02.jpg",
      "assets/img/imgsins/Promessaa/promessaa01.jpg",
    ],
  },
  {
    // 13
    nombre: "HLP-Sofía",
    genero: "Female", // Hembra
    fechaNacimiento: "12-01-2020",
    padre: "L.L Khartoum",
    madre: "Promessaa",
    documentacion: "assets/doc/Sofia.pdf",
    detalles: "",
    imagenes: [
      "assets/img/imgsins/Sofía/HLP-Sofia_02.jpg",
      "assets/img/imgsins/Sofía/HLP-Sofia_01.jpg",
      "assets/img/imgsins/Sofía/HLP-Sofia_03.jpg",
      "assets/img/imgsins/Sofía/sofia01.jpg",
      "assets/img/imgsins/Sofía/sofia02.jpg",
      "assets/img/imgsins/Sofía/sofia03.jpg",
      "assets/img/imgsins/Sofía/sofia04.jpg",
      "assets/img/imgsins/Sofía/sofia05.jpg",
      "assets/img/imgsins/Sofía/sofia06.jpg",
    ],
  },
  {
    // 14
    nombre: "Sultán",
    genero: "Male", // Macho
    fechaNacimiento: "09-01-2021",
    padre: "Shangrila Baltazar",
    madre: "HSA Takira",
    documentacion: "assets/doc/Sultan.pdf",
    detalles: "",
    imagenes: [
      "assets/img/imgsins/Sultan/sultan01.jpg",
      "assets/img/imgsins/Sultan/sultan02.jpg",
      "assets/img/imgsins/Sultan/sultan03.jpg",
      "assets/img/imgsins/Sultan/sultan04.jpg",
    ],
  },
  {
    // 15
    nombre: "Very Magical",
    genero: "Female", // Hembra
    fechaNacimiento: "Pending",
    padre: "XY",
    madre: "XX",
    documentacion: "Pending",
    detalles: "",
    imagenes: [
      "assets/img/imgsins/Very_Magical/very_magical04.jpg",
      "assets/img/imgsins/Very_Magical/very_magical03.jpg",
      "assets/img/imgsins/Very_Magical/very_magical02.jpg",
      "assets/img/imgsins/Very_Magical/very_magical01.jpg",
    ],
  },
  {
    // 16
    nombre: "Yassira",
    genero: "Female", // Hembra
    fechaNacimiento: "Pendiente",
    padre: "Caballo XY",
    madre: "Caballo XX",
    documentacion: "assets/doc/Yassira.pdf",
    detalles: "",
    imagenes: [
      "assets/img/imgsins/Yassira/yassira02.jpg",
      "assets/img/imgsins/Yassira/yassira01.jpg",
      "assets/img/imgsins/Yassira/yassira03.jpg",
    ],
  },
];

// IMPORTANTE AGREGAR URL
const urls = {
  "HP Ali": "https://www.allbreedpedigree.com/hp+ali2",
  //"Sweet Enya": "URL_DE_SWEET_ENYA",
  "Shangrila Baltazar": "https://www.allbreedpedigree.com/shangrila+baltazar",
  "HP Colomba - TE": "https://www.allbreedpedigree.com/hp+colomba",
  "HP Shahmaan": "https://www.allbreedpedigree.com/hp+shahmaan",
  //"HP Jadda - TE": "URL_DE_HP_JADDA_TE",
  //"HSA Takira": "URL_DE_HSA_TAKIRA",
  Pogrom: "https://www.allbreedpedigree.com/pogrom3",
  "ZT Macja": "https://www.allbreedpedigree.com/zt+macja",
  "L.L Khartoum": "https://www.allbreedpedigree.com/ll+khartoum",
  Promessaa: "https://www.allbreedpedigree.com/promessaa",
  // Añade más mapeos según sea necesario
};

function cargar(event) {
  const modal = document.querySelector(".modal");
  const nombre = modal.querySelector(".modal-title");
  const value = event.target.value;
  const carousel = modal.querySelector(".carousel-inner");

  const link = modal.querySelector(".documentacion");
  const genero = modal.querySelector(".genero");
  const fechaNacimiento = modal.querySelector(".fechaNacimiento");
  const padre = modal.querySelector(".padre");
  const madre = modal.querySelector(".madre");
  const detalles = modal.querySelector(".detalles");
  nombre.innerHTML = caballos[value].nombre;
  genero.innerHTML = caballos[value].genero;
  fechaNacimiento.innerHTML = caballos[value].fechaNacimiento;

  // Verificar si el padre no es "XY" y es un nombre de caballo
  if (
    caballos[value].padre !== "XY" &&
    caballos[value].padre !== "Caballo XY" &&
    urls[caballos[value].padre]
  ) {
    padre.innerHTML = `<a href="${
      urls[caballos[value].padre]
    }" target="_blank">${caballos[value].padre}</a>`;
  } else {
    padre.innerHTML = caballos[value].padre;
  }

  // Verificar si la madre no es "XX" y es un nombre de caballo
  if (
    caballos[value].madre !== "XX" &&
    caballos[value].madre !== "Caballo XX" &&
    urls[caballos[value].madre]
  ) {
    madre.innerHTML = `<a href="${
      urls[caballos[value].madre]
    }" target="_blank">${caballos[value].madre}</a>`;
  } else {
    madre.innerHTML = caballos[value].madre;
  }

  detalles.innerHTML = caballos[value].detalles;
  // img.setAttribute("src", caballos[value].imagenes[0]);
  if (caballos[value].documentacion === "Pending") {
    link.innerHTML = "Pending";
    link.removeAttribute("href");
  } else {
    link.innerHTML = "View documentation";
    link.setAttribute("href", caballos[value].documentacion);
  }

  // REINICIO CAROUSEL
  carousel.innerHTML = "";
  caballos[value].imagenes.forEach((imagen) => {
    carousel.innerHTML += `
            <div class="carousel-item">
                <img src="${imagen}" class="d-block w-100" alt="..." >
            </div>
        `;
  });
  const img = modal.querySelector(".carousel-item");
  img.classList.add("active");

  console.log(event.target.value);
}
