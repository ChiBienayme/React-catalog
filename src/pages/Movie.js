import React from 'react'
import { Link } from "react-router-dom";
import movies from "../movies.json"


class Movie extends React.Component {
  // V1
  // constructor() {
  //   super();

  //   this.state = {
  //     movie: {},
  //   };
  // }

  // componentDidMount() {
  //   let movie = movies[this.props.match.params.id - 1]; //json: the first Id of film is 1, but an array starts at 0, so we need to -1
  //   this.setState({ movie });
  // }

  render() {
    // V2
    const movie = movies.find((movie) => {
      return (
        movie.id.toString() === this.props.match.params.id.toString()
      );
    });

    return (
      <div> 
        <h2> Info of movie </h2>
          
        {/* V1 */}
        {/* <ul>
            
            <h1> {this.state.movie.title} </h1>
            <img   className="poster" scr={this.state.movie.image} alt="pic">  </img>
            <li> <p> Director: {this.state.movie.director} </p> </li>
            <li> <p> Stars: {this.state.movie.stars} </p> </li>
            <li> <p> Description: {this.state.movie.description} </p> </li>

        </ul> */}

        {/* V2 */}
        <ul>
          <h2>{movie.title}</h2>
					<img src={movie.image} alt="pic"/>
          <li>Stars: {movie.stars}</li> 
          <li>Description: {movie.description}</li> 
        </ul>

        <Link to="/"> Back to the list </Link>
                 
      </div>
    )
  }
}

export default Movie