import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Nav } from './components'
import { Board, Home, Item, User } from './pages'
import { UserLogin, UserRegister, UserRemove, UserUpdate } from './components/user'
 
const App = () => {return<>
  <Router>
    <Nav/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        
        <Route exact path="/user" component={User}></Route>
        <Route path="/user/login" component={UserLogin}></Route>
        <Route path="/user/register" component={UserRegister}></Route>
        <Route path="/user/update" component={UserUpdate}></Route>
        <Route path="/user/remove" component={UserRemove}></Route>
        <Route path="/user/remove" component={UserRemove}></Route>

        <Route path="/board" component={Board}></Route>
        <Route path="/item" component={Item}></Route>
      </Switch>
  </Router>
</>
}

export default App
