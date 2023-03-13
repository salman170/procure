import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './components/Dashboards/Admin';
import ManufacturerDashboard from './components/Dashboards/ManufacturerDashboard';
import UserDashboard from './components/Dashboards/UserDashboard';
import Login from './components/Login';

import Main from './components/Main';
import SignUp from './components/SignUp';
import "./App.css" 
import Root from './components/Dashboards/Root';
import { useStateContext } from './components/Dashboards/contexts/ContextProvider';
import { Pie, Stacked, ThemeSettings } from './components/Dashboards/components';
import { Area, Bar, Calendar, ColorMapping, ColorPicker, Customers, Ecommerce, Editor, Employees, Financial, Kanban, Line, Orders, Pyramid } from './components/Dashboards/pages';

function App() {
  const {
    themeSettings,
  } = useStateContext();

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
        <Route exact path="/root" element={<Root />} />
        </Routes>
        <div>
           {themeSettings && <ThemeSettings />}

           <Routes>
             {/* dashboard  */}
             <Route path='/root' element={<Ecommerce />} />
             <Route path='/ecommerce' element={<Ecommerce />} />

             {/* pages  */}
             <Route path='/orders' element={<Orders />} />
             <Route path='/employees' element={<Employees />} />
             <Route path='/customers' element={<Customers />} />

             {/* apps  */}
             <Route path='/kanban' element={<Kanban />} />
             <Route path='/editor' element={<Editor />} />
             <Route path='/calendar' element={<Calendar />} />
             <Route path='/color-picker' element={<ColorPicker />} />

             {/* charts  */}
             <Route path='/line' element={<Line />} />
             <Route path='/area' element={<Area />} />
             <Route path='/bar' element={<Bar />} />
             <Route path='/pie' element={<Pie />} />
             <Route path='/financial' element={<Financial />} />
             <Route path='/color-mapping' element={<ColorMapping />} />
             <Route path='/pyramid' element={<Pyramid />} />
             <Route path='/stacked' element={<Stacked />} />
           </Routes>
         </div>
      </Router>
    </div>
  );
}

export default App;
