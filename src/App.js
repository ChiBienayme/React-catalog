import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Catalog from "./catalog.json"


class App extends React.Component {
  

  render() {
    return ( 
      <BrowserRouter>

            <Switch>
              
              <Route path="/catalog/:id" component={Catalog} />

            </Switch>

          </BrowserRouter>
    )
          
  }
}

export default App