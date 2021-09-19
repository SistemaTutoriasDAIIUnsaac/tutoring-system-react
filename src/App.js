import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Content from './components/Content';
// Import components
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import NewsList from "./pages/NewsList";
import ListAppointments from "./pages/ListAppointments";
import TimeAvailability from "./components/TimeAvailability";
import Prueba from "./pages/DistributeStudents";
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
import EditTeacherList from "./pages/EditTeacherList";
import EditHelperStudentList from "./pages/EditHelperStudentList";
import NewNovelty from "./pages/NewNovelty";

import UploadFiles from "./pages/UploadFiles";
import StudentsHelpersList from "./pages/StudentsHelpersList";
import TutorsList from "./pages/TutorsList";
import DataofAppointment from "./pages/DataofAppointments";
import Login from "./auth/Login";
import ChangeCredentials from "./auth/ChangeCredentials";
import NewCoordinator from "./pages/NewCoordinator";
import DistributeStudents from "./pages/DistributeStudents";
import UploadDataCoordinator from "./pages/UploadDataCoordinator";
import PrivateRoute from "./components/private/PrivateRoute";
import AuthContext from "./context/Authentication/authContext";
import tokenAuth from "./config/token";

// Check if exist a token
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);  
}

function App() {

  return (
    <AppointmentsState>
      <AuthState>
        <Router>
          {/* <Header />
          <SideBar /> */}
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/cambiar_contraseña" component={ChangeCredentials} />
            {/* Views for Tutors */}
            <PrivateRoute
              exact
              path="/lista_de_tutorados"
              component={Tutorados}
            />
            <PrivateRoute
              exact
              path="/lista_de_citas/:cod_student"
              component={ListAppointments}
            />
            <PrivateRoute
              exact
              path="/nueva_cita/:cod_student"
              component={NewAppointment}
            />
            <PrivateRoute
              exact
              path="/ver_cita/:cod_appointment"
              component={DataofAppointment}
            />
            {/* Views for Students */}
            <PrivateRoute
              exact
              path="/informacion_estudiante"
              component={InformationStudent}
            />
            <PrivateRoute exact path="/subir_datos" component={UploadFiles} />
            {/* Views for all */}
            <PrivateRoute exact path="/novedades" component={NewsList} />

            <PrivateRoute
              exact
              path="/distribuir_Estudiantes"
              component={DistributeStudents}
            />
            <PrivateRoute
              exact
              path="/nueva_Novedad"
              component={NewNovelty}
            />
            <Route exact path="/teacher" component={Teacher} />
            <Route
              exact
              path="/nuevo_estudiante"
              component={NewStudent}
            />
            <Route
              exact
              path="/lista_de_talleres"
              component={Talleres}
            />
            <Route
              exact
              path="/asistencias_talleres"
              component={ViewAssistance}
            />
            <Route
              exact
              path="/disponibilidad_horaria/:cod_tutor"
              component={TimeAvailability}
            />
            <Route
              exact
              path="/asistencia_por_fecha/:cod_taller"
              component={AttendanceByDate}
            />
            <Route
              exact
              path="/asistencia_por_alumno/:cod_taller"
              component={VerListaPorAlumno}
            />
            <Route
              exact
              path="/editar_lista_de_tutores"
              component={EditTeacherList}
            />
            <Route
              exact
              path="/editar_lista_de_estudiantes_ayudantes"
              component={EditHelperStudentList}
            />
            <Route
              exact
              path="/lista_de_estudiantes_ayudantes"
              component={StudentsHelpersList}
            />
            <Route
              exact
              path="/lista_de_tutores"
              component={TutorsList}
            />            
            <Route
              exact
              path="/nuevo_coordinador"
              component={NewCoordinator}
            />
            <Route
              exact
              path="/subir_datos_coordinador"
              component={UploadDataCoordinator}
            />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </AuthState>
    </AppointmentsState>
  );
}

export default App;
