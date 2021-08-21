import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Homepage'
import Main from './components/mainPage'
import Features from './components/Features'
import Contact from './components/Contact'
import SignUp from './components/SignUpPage'
import Demo from './components/Demo'
import Map from './components/Map'
function App() {
  return (
   <Router>
     <Switch>
       <Route path="/" component={Home} exact />
       <Route path="/Main" component={Main} exact />
       <Route path="/Features" component={Features} exact />
       <Route path="/Contact" component={Contact} exact />
       <Route path="/sign-up" component={SignUp} exact />
       <Route path="/Location" component={Demo} exact />
       <Route path="/demo" component={Map} exact />
     </Switch>
   </Router>
  );
}

export default App;
