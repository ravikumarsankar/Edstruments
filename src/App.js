import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import InvoicePage from "./pages/InvoicePage";

function App() {
  const isLoggedIn = !!localStorage.getItem("session");
  const[isLogged,setLogged]  = React.useState(isLoggedIn)
  React.useEffect(()=>{
     setLogged(isLoggedIn)
  },[isLoggedIn])
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={isLogged ? <Navigate to="/invoice" /> : <LoginPage setLoggedIn={setLogged}/>}
        />
        <Route
          path="/invoice"
          element={isLogged ? <InvoicePage setLoggedIn = {setLogged}/> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;