import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DisplayLeads from "./components/DisplayLeads";

import Header from "./components/Header";
import LeadInfo from "./components/LeadInfo";
import Login from "./components/Login";
import ManageLead from "./components/ManageLead";

import SignUp from "./components/SignUp";
import Home from "./homePage/Home";
// export const url="http://localhost:8000"
export const url = "https://auth-be-p6px.onrender.com"
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          
          
          <Route path="/users/signup" element={<SignUp />} />
          <Route path="/manage-lead/:id" element={<ManageLead />} />
          <Route path="/display-lead" element={<DisplayLeads />} />
          <Route path="/lead-info" element={<LeadInfo />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users/login-user" element={<Login />} />
         
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/incoming-leads" element={<Dashboard />} />
          <Route path="/converted-leads" element={<Dashboard />} />
          <Route path="/closed-leads" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/users/login-user" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;




