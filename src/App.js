import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Content from './components/Content';
// Import components
import Header from './components/Header'
import SideBar from './components/SideBar'
import NewsList from './components/NewsList'
import ViewAppointments from './components/ViewAppointments';
import Prueba from './pages/Prueba';
import Teacher from './pages/Teacher';
import NewStudent from './pages/NewStudent';
import ListStudent from './pages/ListStudent';
import Tutorados from './pages/Tutorados';
import Talleres from './pages/Talleres';

import ListStudents from './pages/ListStudents';
import InformationStudent from './pages/InformationStudent';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <SideBar/>
      <Switch>
        <Route exact path="/prueba" component={Prueba}/>
        <Route exact path="/teacher" component={Teacher}/>
        <Route exact path="/Tutorados" component={Tutorados}/>
        <Route exact path="/Talleres" component={Talleres}/>
        <Route exact path="/Nuevo_Estudiante" component={NewStudent}/>
        <Route exact path="/list_student" component={ListStudent}/>
        <Route exact path="/newslist" component={NewsList}/>
        <Route exact path="/informationstudent" component={InformationStudent}/>
        <Route exact path="/viewappointments" component={ViewAppointments}/>
        <Route exact path="/Lista_de_Estudiantes" component={ListStudents}/>
        <Route exact path="/Informationstudent" component={InformationStudent}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
