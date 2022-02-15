import React from 'react'
import { Link } from "react-router-dom";

class Movie extends React.Component {
  render() {
    return (
      <div> 
        <h2>Info of movie </h2>
          
        <ul>
            <img scr={this.props.movies.image} alt=""/> 
            <li> <p> Name of movie: {this.props.match.params.title} </p> </li>
            <li> <p> Director: {this.props.match.params.director} </p> </li>
            <li> <p> Star: {this.props.match.params.stars} </p> </li>
            <li> <p> Description: {this.props.match.params.description} </p> </li>
        </ul>
        
        <Link to="/">Back to Homepage</Link>
                 
      </div>
    )
  }
}

export default Movie