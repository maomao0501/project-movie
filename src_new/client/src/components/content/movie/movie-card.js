import React from 'react'
import {Link} from "react-router-dom";

const MovieCard = ({movie}) => {
    return(
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="card" style={{margin: "10px"}}>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}></img>
                <div className="card-body">

                    <Link to={`/details/${movie.id}`}>
                        {movie.title}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MovieCard