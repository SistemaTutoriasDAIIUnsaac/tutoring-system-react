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
import AuthState from "./context/Authentication/authState";
import EditTeacherList from "./pages/EditTeacherList"
import EditHelperStudentList from "./pages/EditHelperStudentList"
import NewNovelty from "./pages/NewNovelty";

// import Login from "./auth/Login";
// import Register from "./auth/Register";


function App() {
  return (
    <AppointmentsState>
      <AuthState>
        <Router>
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/Registro" component={Register} /> */}
          <Header />
          <SideBar />
            <Switch>
              <Route exact path="/teacher" component={Teacher} />
              <Route exact path="/Nuevo_Estudiante" component={NewStudent} />          
              <Route exact path="/" component={NewsList} />
              <Route exact path="/Lista_de_Tutorados" component={Tutorados} />
              <Route exact path="/Lista_de_Talleres" component={Talleres} />
              <Route exact path="/Asistencias_Talleres" component={ViewAssistance} />
              <Route exact path="/Lista_de_citas" component={ViewAppointments} />
              <Route exact path="/Informacion_Estudiante/:cod_student" component={InformationStudent} />
              <Route exact path="/Nueva_cita/:cod_student" component={NewAppointment} />
              <Route exact path="/Disponibilidad_Horaria/:cod_tutor" component={TimeAvailability} />
              <Route exact path="/AttendanceByDate/:cod_taller" component={AttendanceByDate} />
              <Route exact path="/Lista_Asistencia/:cod_taller" component={VerListaPorAlumno} />
              <Route exact path="/Editar_Lista_De_Tutores" component={EditTeacherList} />
              <Route exact path="/Editar_Lista_De_Estudiantes_Ayudantes" component={EditHelperStudentList} />
              <Route exact path="/Informacion_Coordinador/:cod_Cor" component={NewNovelty} />
            </Switch>
          <Footer />
        </Router>
      </AuthState>
    </AppointmentsState>
  );
}

export default App;
