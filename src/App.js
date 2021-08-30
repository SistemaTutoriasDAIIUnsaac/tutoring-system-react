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
import ListStudent from "./pages/ListStudent";
import InformationStudent from "./pages/InformationStudent";
import NewAppointment from "./pages/NewAppointment";
import Tutorados from "./pages/Tutorados";
import Talleres from "./pages/Talleres";
import AttendanceByDate from "./pages/AttendanceByDate";
import VerListaPorAlumno from "./pages/VerListaPorAlumno";
import ListStudents from "./pages/ListStudents";
import Footer from "./components/Footer";
import ViewAssistance from "./pages/ViewAssistance";
import AppointmentsContext from "./context/Appointments/AppointmentsContext";
import AppointmentsState from "./context/Appointments/AppointmentsState";
function App() {
  return (
    <Router>
      <Header />
      <SideBar />
      <Footer />
    </Router>
  );
}

export default App;
