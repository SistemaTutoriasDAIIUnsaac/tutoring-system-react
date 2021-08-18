import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Content from './components/Content';
// Import components
import Header from './components/Header'
import SideBar from './components/SideBar'
import Prueba from './pages/Prueba';
import Teacher from './pages/Teacher';

function App() {
  return (
    <Router>
      <Header/>
      <SideBar/>
      <Switch>
        <Route exact path="/prueba" component={Prueba}/>
        <Route exact path="/teacher" component={Teacher}/>
      </Switch>
    </Router>
  );
}

export default App;
