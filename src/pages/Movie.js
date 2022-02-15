import React from 'react'
import { Link } from "react-router-dom"
import movies from "../movies.json"


class Movie extends React.Component {

    render() {
        return <div>

                <h2> List of Movies </h2>

                {
                    movies.map(movie => {
                        return <ul>
                            <li>{movie.title} </li>
                        </ul>
                    })
                }
                <Link to="/"> Back to homepage </Link>
                
           
            </div>
        
    }
}

export default Movie;