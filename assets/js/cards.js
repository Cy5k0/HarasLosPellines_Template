const cards = [
    {
        nombreCaballo: "Agatha",
        sexo: "FEMALE",
        imagenes: ["assets/img/imgsins/Agatha/agatha.jpg"],
        value: 0,
        filtro: "filter-cria",
    },
    {
        nombreCaballo: "Alma",
        sexo: "FEMALE",
        imagenes: ["assets/img/imgsins/Alma/HLP-Alma.jpg" ],
        value: 1,
        filtro: "filter-cria",
    },
    {
        nombreCaballo: "Angela",
        sexo: "FEMALE",
        imagenes: ["assets/img/imgsins/Angela/angela.jpg"],
        value: 2,
        filtro: "filter-hembra",
    },
    {
        nombreCaballo: "Aston",
        sexo: "MALE",
        imagenes: ["assets/img/imgsins/Aston/Aston.jpg"],
        value: 3,
        filtro: "filter-cria",
    },
    {
        nombreCaballo: "Charles",
        sexo: "MALE",
        imagenes: ["assets/img/imgsins/Charles/Charles.jpg"],
        value: 4,
        filtro: "filter-macho",
    },
    {
        nombreCaballo: "HLP-Charlotte",
        sexo: "FEMALE",
        imagenes: ["assets/img/imgsins/Charlotte/charlotte_02.jpg"],
        value: 5,
        filtro: "filter-hembra",
    },
    {
        nombreCaballo: "Domeniko",
        sexo: "MALE",
        imagenes: ["assets/img/imgsins/Domeniko/domeniko01.jpg"],
        value: 6,
        filtro: "filter-macho",
    },
    {
        nombreCaballo: "Emily",
        sexo: "FEMALE",
        imagenes: ["assets/img/imgsins/Emily/emily03.jpg"],
        value: 7,
        filtro: "filter-hembra",
    },
    {
        nombreCaballo: "Johara",
        sexo: "FEMALE",
        imagenes: ["assets/img/imgsins/Johara/johara.jpg"],
        value: 8,
        filtro: "filter-hembra",
    },
    {
        nombreCaballo: "Martina",
        sexo: "FEMALE",
        imagenes: ["assets/img/imgsins/Martina/martina02.jpg"],
        value: 9,
        filtro: "filter-hembra",
    },
    {
        nombreCaballo: "Melika",
        sexo: "FEMALE",
        imagenes: ["assets/img/imgsins/Melika/melika01.jpg" ],
        value: 10,
        filtro: "filter-hembra",
    },
    {
        nombreCaballo: "Promessaa",
        sexo: "FEMALE",
        imagenes: ["assets/img/imgsins/Promessaa/promessaa02.jpg"],
        value: 11,
        filtro: "filter-hembra",
    },
    {
        nombreCaballo: "HLP-Sofía",
        sexo: "FEMALE",
        imagenes: ["assets/img/imgsins/Sofía/HLP-Sofia_02.jpg" ],
        value: 12,
        filtro: "filter-hembra",
    },
    {
        nombreCaballo: "Sultán",
        sexo: "MALE",
        imagenes: ["assets/img/imgsins/Sultan/sultan01.jpg" ],
        value: 13,
        filtro: "filter-macho",
    },
    {
        nombreCaballo: "Very Magical",
        sexo: "FEMALE",
        imagenes: ["assets/img/imgsins/Very_Magical/very_magical04.jpg" ],
        value: 14,
        filtro: "filter-hembra",
    },
    {
        nombreCaballo: "Yassira",
        sexo: "FEMALE",
        imagenes: ["assets/img/imgsins/Yassira/yassira02.jpg"],
        value: 15,
        filtro: "filter-hembra",
    },
]

const portfolioContainer = document.querySelector(".portfolio-container");

cards.forEach(card=>{
    portfolioContainer.innerHTML+=`
                        <div class="col-lg-4 col-md-6 portfolio-item ${card.filtro}">
                        <div class="portfolio-wrap">
                            <img src="${card.imagenes[0]}" class="img-fluid" alt=""
                                style="width: 100%; height: 300px; object-fit: cover;">
                            <div class="portfolio-info">
                                <h4>${card.nombreCaballo}</h4>
                                <p>${card.sexo}</p>
                                <!-- pe-none => pointer event none (value = none) Es para que no detecte i-->
                                <div class="portfolio-links">
                                    <button type="button" class="btn btn-light rounded-5 rounded-circle"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal" value="${card.value}"
                                        onclick="cargar(event)">
                                        <i class="fa-solid fa-magnifying-glass-plus pe-none" style="color: #74C0FC;"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
    `
});