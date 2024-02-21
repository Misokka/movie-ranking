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
        "Raiponce": "Raiponce grandit et devient une fille d'une très grande beauté, dont les longs cheveux dorés et blonds sont réunis en deux tresses longues et soyeuses."
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


