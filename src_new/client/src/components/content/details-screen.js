import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import movieService from "../services/movie-service";

const DetailsScreen = () => {
    const {imdbID} = useParams();
    const history = useHistory();
    const [movie, setMovie] = useState({});
    useEffect(() => {
        findMovieByIMDB()
    },[])
    const findMovieByIMDB = () => {
        movieService.findMovieByIMDB(imdbID)
            .then((data) => {
                setMovie(data)
            })
    }
    return (
        <div>
            <button onClick={() => {history.goBack()}}>Back</button>
            <h2>{movie.title}</h2>
            <p>
                <img width={300} style={{float: "right"}} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}></img>
                {movie.overview}
            </p>
            <div>
                {movie.original_title}
                <br/>
                {movie.release_date}
            </div>
            {/*{JSON.stringify(movie)}*/}
        </div>
    )
}

export default DetailsScreen;
