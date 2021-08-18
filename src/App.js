import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Content from './components/Content';
// Import components
import Header from './components/Header'
import SideBar from './components/SideBar'
import Prueba from './pages/Prueba';

function App() {
  return (
    <Router>
      <Header/>
      <SideBar/>
      <Content/>
      <Switch>
        <Route exact path="/prueba" component={Prueba}/>
      </Switch>
    </Router>
  );
}

export default App;
