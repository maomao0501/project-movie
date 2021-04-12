import React from 'react'
import MovieCard from "./movie-card";

const MovieGrid = ({movies}) =>
    <div>
        <table className="table">
            <thead>
            <tr>
                <th>Movies Result: </th>
            </tr>
            </thead>
        </table>
        <div className="row">
            {
                movies.map((movie) =>
                    <MovieCard movie={movie}/>
                )
            }
        </div>
    </div>

export default MovieGrid