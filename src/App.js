import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Content from './components/Content';
// Import components
import Header from './components/Header'
import SideBar from './components/SideBar'
import NewsList from './components/NewsList'
import Prueba from './pages/Prueba';
import Teacher from './pages/Teacher';
import Student from './pages/Student';
import ListStudent from './pages/ListStudent';
import InformationStudent from './pages/InformationStudent';
import CitaNueva from './pages/CitaNueva';
function App() {
  return (
    <Router>
      <Header/>
      <SideBar/>   
      <Switch>
        <Route exact path="/prueba" component={Prueba}/>
        <Route exact path="/teacher" component={Teacher}/>
        <Route exact path="/student" component={Student}/>     
        <Route exact path="/list_student" component={ListStudent}/>
        <Route exact path="/newslist" component={NewsList}/>
        <Route exact path="/informationstudent" component={InformationStudent}/>
        <Route exact path="/citanueva" component={CitaNueva}/>
      </Switch>
      
    </Router>
  );
}

export default App;
