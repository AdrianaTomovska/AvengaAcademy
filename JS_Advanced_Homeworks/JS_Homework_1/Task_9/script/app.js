let movieArray = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Forrest Gump",
    "Inception",
    "Fight Club",
    "The Matrix",
    "Gladiator",
    "Titanic"
];

let inputSearch = document.getElementById('search');
let btn = document.getElementById('btnSearch');
let container = document.getElementById('container');

function findMovies(movieArray) {
    container.innerHTML = ''; 
    const searchValue = inputSearch.value.trim().toLowerCase();
    let found = false;

    for (let movie of movieArray) {
        if (movie.toLowerCase() === searchValue) {
            let h1 = document.createElement('h1');
            h1.innerText = movie;
            h1.style.color = 'green';
            container.appendChild(h1);
            found = true;
            break; 
        }
    }

    if (!found) {
        let h1 = document.createElement('h1');
        h1.innerText = "The movie can't be rented";
        h1.style.color = 'red';
        container.appendChild(h1);
    }

    inputSearch.value = ''; 
}


btn.addEventListener('click', function() {
    findMovies(movieArray);
});
