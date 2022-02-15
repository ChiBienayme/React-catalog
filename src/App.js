import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Movie from "./pages/Movie"


class App extends React.Component {
  

  render() {
    return ( 
      <BrowserRouter>

            <Switch>
              
              <Route path="/movie/:id" component={Movie} />

            </Switch>

      </BrowserRouter>
    )
          
  }
}

export default App