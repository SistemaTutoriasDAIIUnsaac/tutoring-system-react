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
import Tutored from "./pages/Tutored";
import TutoringWorkshops from "./pages/TutoringWorkshops";
import AttendanceByDate from "./pages/AttendanceByDate";
import AttendanceByStudent from "./pages/AttendanceByStudent";
import Footer from "./components/Footer";
import ViewAssistance from "./pages/ViewAssistance";
import AppointmentsState from "./context/Appointments/AppointmentsState";
import EditTeacherList from "./pages/EditTeacherList";
import EditHelperStudentList from "./pages/EditHelperStudentList";
import NewNovelty from "./pages/NewNovelty";
// Providers
import AuthState from "./context/Authentication/authState";
import AdminState from "./context/AdminFunctions/adminState";

import UploadFiles from "./pages/UploadFiles";
import StudentsHelpersList from "./pages/StudentsHelpersList";
import TutorsList from "./pages/TutorsList";
import DataofAppointment from "./pages/DataofAppointments";
import Login from "./auth/Login";
import ChangeCredentials from "./auth/ChangeCredentials";
import NewCoordinator from "./pages/NewCoordinator";
import DistributeStudents from "./pages/DistributeStudents";
import UploadDataCoordinator from "./pages/UploadDataCoordinator";
import InformationCoordinator from "./pages/InformationCoordinator";
import InformationTutor from "./pages/InformationTutor";
import PrivateRoute from "./components/private/PrivateRoute";
import AuthContext from "./context/Authentication/authContext";
import tokenAuth from "./config/token";
import CsvReader from "./pages/CsvReader";
import InformationPrincipal from "./pages/InformationPrincipal";
import NewTutoringProgram from "./pages/NewTutoringProgram";
import NewPrincipal from "./pages/NewPrincipal";

// Check if exist a token
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <AdminState>
      <AppointmentsState>
        <AuthState>
          <Router>
            {/* <Header />
          
          <SideBar /> */}
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route
                exact
                path="/cambiar_contraseña"
                component={ChangeCredentials}
              />

              {/* Views for all */}
              <PrivateRoute exact path="/novedades" component={NewsList} />

              {/* Views for Tutors */}
              <PrivateRoute
                exact
                path="/informacion_tutor"
                component={InformationTutor}
              />
              <PrivateRoute
                exact
                path="/lista_de_tutorados"
                component={Tutored}
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
              {/* Views for Principal */}
              <PrivateRoute
                exact
                path="/informacion_director"
                component={InformationPrincipal}
              />
              {/* Views for Coordinators */}
              <PrivateRoute
                exact
                path="/informacion_coordinador"
                component={InformationCoordinator}
              />
              <PrivateRoute
                exact
                path="/distribuir_estudiantes"
                component={DistributeStudents}
              />
              <PrivateRoute
                exact
                path="/agregar_novedad"
                component={NewNovelty}
              />
              {/* <Route exact path="/teacher" component={Teacher} />
              <Route exact path="/nuevo_estudiante" component={NewStudent} />
              <Route
                exact
                path="/lista_de_talleres"
                component={TutoringWorkshops}
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
                component={AttendanceByStudent}
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
              /> */}
              <PrivateRoute
                exact
                path="/lista_de_tutores"
                component={TutorsList}
              />
              {/* <Route
                exact
                path="/nuevo_coordinador"
                component={NewCoordinator}
              /> */}
              <PrivateRoute
                exact
                path="/actualizar_coordinador"
                component={UploadDataCoordinator}
              />              
              <PrivateRoute
                exact
                path="/crear_programa_de_tutoria"
                component={NewTutoringProgram}
              />
              <PrivateRoute
                exact
                path="/asignar_director"
                component={NewPrincipal}
              />
              {/* Views for Students */}
              {/* <Route exact path="/CSV" component={CsvReader} /> */}
            </Switch>
            {/* <Footer /> */}
          </Router>
        </AuthState>
      </AppointmentsState>
    </AdminState>
  );
}

export default App;
