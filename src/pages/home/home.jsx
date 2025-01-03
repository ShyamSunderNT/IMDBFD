
import React, { useEffect, useState } from 'react';
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../components/movielist/movielist';

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=0fe6ccec9ad09dafe708af42f2842a8a&language=en-US")
            .then(res => res.json())
            .then(data => {
                console.log(data); // Inspect the API response
                setPopularMovies(data.results || []); // Ensure results is an array
            })
            .catch(err => console.error(err)); // Handle errors
    }, []);

    return (
        <div className="poster">
            {popularMovies.length > 0 ? (
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {popularMovies.map(movie => (
                        <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} key={movie.id}>
                            <div className="posterImage">
                                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.original_title} />
                            </div>
                            <div className="posterImage__overlay">
                                <div className="posterImage__title">{movie.original_title}</div>
                                <div className="posterImage__runtime">
                                    {movie.release_date}
                                    <span className="posterImage__rating">
                                        {movie.vote_average}
                                        <i className="fas fa-star" />{" "}
                                    </span>
                                </div>
                                <div className="posterImage__description">{movie.overview}</div>
                            </div>
                        </Link>
                    ))}
                </Carousel>
            ) : (
                <p>Loading movies...</p>
            )}
            <MovieList />
        </div>
    );
};

export default Home;
