import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Dashboard/Form";
import Table from "./components/Dashboard/Table";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { JobVacancyProvider } from "./context/JobVacancyContext";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import JobVacancy from "./pages/JobVacancy";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <JobVacancyProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-vacancy" element={<JobVacancy />} />
          <Route
            path="/dashboard"
            element={<Dashboard component={<Table />} page="Dashboard" />}
          />
          <Route
            path="/job-form"
            element={<Dashboard component={<Form />} page="Form" />}
          />
        </Routes>
      </JobVacancyProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
