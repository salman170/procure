import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './components/Dashboards/Admin';
import ManufacturerDashboard from './components/Dashboards/ManufacturerDashboard';
import UserDashboard from './components/Dashboards/UserDashboard';
import Login from './components/Login';

import Main from './components/Main';
import SignUp from './components/SignUp';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signin" element={<SignUp />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/user" element={<UserDashboard />} />
        <Route exact path="/manufacturer" element={<ManufacturerDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
