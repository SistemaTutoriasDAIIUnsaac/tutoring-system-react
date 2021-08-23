import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Content from './components/Content';
// Import components
import Header from './components/Header'
import SideBar from './components/SideBar'
import News_List from './components/News_List'
import Prueba from './pages/Prueba';
import Teacher from './pages/Teacher';
import Student from './pages/Student';

function App() {
  return (
    <Router>
      <Header/>
      <SideBar/>   
      <Switch>
        <Route exact path="/prueba" component={Prueba}/>
        <Route exact path="/teacher" component={Teacher}/>
        <Route exact path="/student" component={Student}/>
        <News_List>
        </News_List>
      </Switch>
      
    </Router>
  );
}

export default App;
