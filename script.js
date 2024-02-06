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
        "La ligne verte"
    ];

    const filmsListDiv = document.getElementById("filmsList");

    films.forEach(film => {
        const filmDiv = document.createElement("div");
        filmDiv.classList.add("film");
        filmDiv.innerHTML = film;
        filmsListDiv.appendChild(filmDiv);
    });
});
