const API_KEY = "a17b23da55290facfec6182186abc701"
const MOVIE_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=a17b23da55290facfec6182186abc701"

// export const findTopRated = () =>
//     fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=a17b23da55290facfec6182186abc701`)
//         .then(response => response.json())
//
// export const findMovieById = (mid) =>
//     fetch(`https://api.themoviedb.org/3/movie/${mid}?api_key=a17b23da55290facfec6182186abc701`)
//         .then(response => response.json())
//
// export default {
//     findTopRated,
//     findMovieById
// }

const findMoviesByTitle = (title) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=481adc0fe1fe4c92d90b3afd667e5e1c&query=${title}`)
        .then(response => response.json())
}

const findMovieByIMDB = (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=481adc0fe1fe4c92d90b3afd667e5e1c`)
        .then(response => response.json())
}

const findPopular = () => {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=481adc0fe1fe4c92d90b3afd667e5e1c&language=en-US&page=1`)
        .then(response => response.json())
}

export default {
    findMoviesByTitle, findMovieByIMDB, findPopular
}
