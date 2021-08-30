import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Content from './components/Content';
// Import components
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import NewsList from "./pages/NewsList";
import ViewAppointments from "./pages/ViewAppointments";
import TimeAvailability from "./components/TimeAvailability";
// import Prueba from './pages/Prueba';
import Teacher from "./pages/Teacher";
import NewStudent from "./pages/NewStudent";
import InformationStudent from "./pages/InformationStudent";
import NewAppointment from "./pages/NewAppointment";
import Tutorados from "./pages/Tutorados";
import Talleres from "./pages/Talleres";
import AttendanceByDate from "./pages/AttendanceByDate";
import VerListaPorAlumno from "./pages/VerListaPorAlumno";
import Footer from "./components/Footer";
import ViewAssistance from "./pages/ViewAssistance";
import AppointmentsState from "./context/Appointments/AppointmentsState";


function App() {
  return (
    <Router>
      <Header />
      <SideBar />
      {/* <AppointmentsState> */}
        <Switch>
          {/* <Route exact path="/prueba" component={Prueba}/> */}
          <Route exact path="/teacher" component={Teacher} />
          <Route exact path="/Nuevo_Estudiante" component={NewStudent} />
          {/* <Route exact path="/Lista_de_Estudiantes" component={ListStudents}/> */}

          <Route exact path="/" component={NewsList} />
          <Route exact path="/Lista_de_Tutorados" component={Tutorados} />
          <Route exact path="/Lista_de_Talleres" component={Talleres} />
          <Route
            exact
            path="/Asistencias_Talleres"
            component={ViewAssistance}
          />
          <Route exact path="/Lista_de_citas" component={ViewAppointments} />
          {/* <Route exact path="/Lista_de_estudiantes" component={ListStudent}/>         */}

          <Route
            exact
            path="/Informacion_Estudiante/:cod_student"
            component={InformationStudent}
          />
          <Route
            exact
            path="/Nueva_cita/:cod_student"
            component={NewAppointment}
          />
          <Route
            exact
            path="/Disponibilidad_Horaria/:cod_tutor"
            component={TimeAvailability}
          />
          <Route
            exact
            path="/AttendanceByDate/:cod_taller"
            component={AttendanceByDate}
          />
          <Route
            exact
            path="/Lista_Asistencia/:cod_taller"
            component={VerListaPorAlumno}
          />
        </Switch>
      {/* </AppointmentsState> */}
      <Footer />
    </Router>
  );
}

export default App;
