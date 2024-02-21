document.addEventListener("DOMContentLoaded", function() {
    const films = [
        "Oppenheimer",
        "Forrest Gump",
        "Gladiator",
        "Le Loup de Wall Street",
        "The Dark Knight",
        "Le Parrain",
        "Les évadés",
        "La liste de Schindler",
        "Pulp Fiction",
        "Inception",
        "Fight Club",
        "Interstellar",
        "Matrix",
        "Seven",
        "Le voyage de Chihiro",
        "La ligne verte",
        "Raiponce"
    ];

    const filmsDescriptions = {
        "Oppenheimer": "Un portrait de J. Robert Oppenheimer, le physicien clé du projet Manhattan qui a mené au développement de la première bombe atomique.",
        "Forrest Gump": "L'histoire extraordinaire de Forrest Gump, un homme avec un QI bas, mais qui se retrouve impliqué dans des moments clés de l'histoire américaine.",
        "Gladiator": "Maximus, un général romain, cherche la vengeance après avoir été trahi et forcé de devenir un gladiateur dans l'arène.",
        "Le Loup de Wall Street": "L'ascension et la chute spectaculaires de Jordan Belfort, un courtier en bourse corrompu, racontées avec un mélange d'humour et de drame.",
        "The Dark Knight": "Batman affronte le Joker, un criminel psychotique, dans une bataille pour sauver Gotham City de la criminalité.",
        "Le Parrain": "L'épopée criminelle de la famille Corleone, dirigée par le patriarche Vito Corleone, dans le monde du crime organisé.",
        "Les évadés": "L'histoire captivante de la tentative d'évasion réussie de plusieurs prisonniers d'une prison haute sécurité.",
        "La liste de Schindler": "L'industriel allemand Oskar Schindler sauve des centaines de vies juives pendant l'Holocauste en les employant dans sa fabrique.",
        "Pulp Fiction": "Une série d'histoires entrelacées impliquant des criminels, des boxeurs, et des personnages énigmatiques dans une narration non linéaire.",
        "Inception": "Dom Cobb, un voleur d'information, utilise une technologie pour infiltrer les rêves des autres afin d'extraire des secrets.",
        "Fight Club": "Un homme sans nom forme un club secret où les membres peuvent exprimer leur frustration à travers des combats physiques.",
        "Interstellar": "Des explorateurs voyagent à travers l'espace pour trouver une nouvelle planète habitable pour sauver l'humanité en crise.",
        "Matrix": "Néo, un programmeur, découvre la vérité sur la réalité simulée de la matrice et rejoint la résistance pour combattre les machines.",
        "Seven": "Deux détectives traquent un tueur en série qui utilise les sept péchés capitaux comme thème dans ses meurtres.",
        "Le voyage de Chihiro": "Chihiro, une jeune fille, découvre un monde fantastique rempli de créatures magiques et tente de retrouver ses parents.",
        "Raiponce": "Raiponce grandit et devient une fille d'une très grande beauté, dont les longs cheveux dorés et blonds sont réunis en deux tresses longues et soyeuses.",
        "La ligne verte": "Synopsis. Paul Edgecomb, pensionnaire centenaire d'une maison de retraite, est hanté par ses souvenirs. Gardien-chef du pénitencier de Cold Mountain en 1935, il était chargé de veiller au bon déroulement des exécutions capitales en s'efforçant d'adoucir les derniers moments des condamnés."
    };

    const filmsListDiv = document.getElementById("filmsList");

    films.forEach(titre => {
        const filmDiv = document.createElement("div");
        filmDiv.classList.add("film");

        const filmImage = document.createElement("img");

        const imageName = titre.toLowerCase().replace(/ /g, "") + ".jpg"; 
        filmImage.src = `img/${imageName}`;
        filmImage.alt = `Affiche de ${titre}`;
        filmImage.classList.add("film-img"); 

        const filmTitre = document.createElement("h2");
        filmTitre.textContent = titre;

        const filmDescription = document.createElement("p");
        filmDescription.textContent = filmsDescriptions[titre] || "";

        const ratingDiv = document.createElement("div");
        ratingDiv.classList.add("rating");
        const savedRating = localStorage.getItem(titre) || 0;
        ratingDiv.dataset.ratingValue = savedRating;
        ratingDiv.dataset.filmTitle = titre;

        for (let i = 1; i <= 5; i++) {
            const star = document.createElement("span");
            star.innerHTML = i <= savedRating ? "&#9733;" : "&#9734;";
            star.dataset.rating = i;
            star.addEventListener("click", function() { setRating(filmDiv, i, titre); });
            ratingDiv.appendChild(star);
        }

        filmDiv.appendChild(filmImage); 
        filmDiv.appendChild(filmTitre);
        filmDiv.appendChild(filmDescription); 
        filmDiv.appendChild(ratingDiv);

        filmsListDiv.appendChild(filmDiv);
    });

    function setRating(filmDiv, rating, filmTitle) {
        const ratingDiv = filmDiv.querySelector(".rating");
        const stars = ratingDiv.querySelectorAll("span");

        stars.forEach((star, index) => {
            star.innerHTML = index < rating ? "&#9733;" : "&#9734;";
        });

        ratingDiv.dataset.ratingValue = rating;
        localStorage.setItem(filmTitle, rating);
    }
});



