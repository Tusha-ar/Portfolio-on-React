import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './Components/About'
import Skill from './Components/Skill'
import Home from './Components/Home'
import Projects from './Components/Projects'

export class App extends Component {
  render() {
    return (
      <Router>
      
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/skill" render={()=>(
            <Skill/>
          )}/> 
          <Route path="/projects" render={()=>(
                    <Projects/>)}/> 
        </Switch>
      
      </Router>
    )
  }
}


export default App
