import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
