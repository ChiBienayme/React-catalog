import React from 'react'
import { Link } from "react-router-dom";

import movies from "../movies.json"
import Movie from './Movie';


class List extends React.Component {

    render() {

        return <div>

                <h2> List of Movies </h2>
                <Link to="/movie/:id">
                    {
                        movies.map(movie => {
                            return <ul>
                                <li>{movie.title} </li>
                            </ul>
                        })
                    }
                </Link>
           
            </div>
        
    }
}

export default List;