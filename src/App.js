import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Content from './components/Content';
// Import components
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import NewsList from "./pages/NewsList";
import ListAppointments from "./pages/ListAppointments";
import TimeAvailability from "./components/TimeAvailability";
import Prueba from './pages/DistributeStudents';
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

import UploadFiles from "./pages/UploadFiles";
import StudentsHelpersList from "./pages/StudentsHelpersList"
import TutorsList from "./pages/TutorsList"
import DataofAppointment from "./pages/DataofAppointments";
import Login from "./auth/Login";
import Register from "./auth/Register";
import NewCoordinator from "./pages/NewCoordinator"
import DistributeStudents from "./pages/DistributeStudents";
import UploadDataCoordinator from "./pages/UploadDataCoordinator"
import PrivateRoute from "./components/private/PrivateRoute";

import tokenAuth from "./config/token";

// Check if exist a token
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  
  // console.log(process.env.REACT_APP_BACKEND_URL)

  return (
    <AppointmentsState>
      <AuthState>
        <Router>
          <Route exact path="/login" component={Login} />
          <Route exact path="/Registro" component={Register} />
          {/* <Header />
          <SideBar /> */}
            <Switch>
              {/* Views for Tutors */}
              <PrivateRoute exact path="/Lista_de_Tutorados" component={Tutorados} />
              <PrivateRoute exact path="/Lista_de_citas/:cod_student" component={ListAppointments} />
              <PrivateRoute exact path="/Nueva_cita/:cod_student" component={NewAppointment} />
              <PrivateRoute exact path="/Ver_cita/:cod_appointment" component={DataofAppointment} />
              {/* Views for Students */}
              <PrivateRoute exact path="/Informacion_Estudiante" component={InformationStudent} />
              <PrivateRoute exact path="/Subir_Datos" component={UploadFiles} />
              {/* Views for all */}
              <PrivateRoute exact path="/Novedades" component={NewsList} />

              <PrivateRoute exact path="/Distribuir_Estudiantes" component={DistributeStudents} />
              <PrivateRoute exact path="/teacher" component={Teacher} />
              <PrivateRoute exact path="/Nuevo_Estudiante" component={NewStudent} />          
              <PrivateRoute exact path="/Lista_de_Talleres" component={Talleres} />
              <PrivateRoute exact path="/Asistencias_Talleres" component={ViewAssistance} />
              <PrivateRoute exact path="/Disponibilidad_Horaria/:cod_tutor" component={TimeAvailability} />
              <PrivateRoute exact path="/AttendanceByDate/:cod_taller" component={AttendanceByDate} />
              <PrivateRoute exact path="/Lista_Asistencia/:cod_taller" component={VerListaPorAlumno} />
              <PrivateRoute exact path="/Editar_Lista_De_Tutores" component={EditTeacherList} />
              <PrivateRoute exact path="/Editar_Lista_De_Estudiantes_Ayudantes" component={EditHelperStudentList} />
              <PrivateRoute exact path="/Lista_de_Estudiantes_Ayudantes" component={StudentsHelpersList} />
              <PrivateRoute exact path="/Lista_de_Tutores" component={TutorsList} />
              <PrivateRoute exact path="/Informacion_Coordinador/:cod_Cor" component={NewNovelty} />
              <PrivateRoute exact path="/Nuevo_Coordinador" component={NewCoordinator} />
              <PrivateRoute exact path="/Subir_Datos_Coordinador" component={UploadDataCoordinator} />
            </Switch>
          {/* <Footer /> */}
        </Router>
      </AuthState>
    </AppointmentsState>
  );
}

export default App;