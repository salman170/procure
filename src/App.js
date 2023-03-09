// import {  BrowserRouter as Router,  Routes,  Route,} from "react-router-dom";

import About from './components/About';
import Footer from './components/Footer';
import Frequently from './components/Frequently';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Login from './components/Login';
// import Inventory from "./components/Inventory";
import Proposel from './components/Proposel';
import Services from './components/Services';
import SignUp from './components/SignUp';
import Track from './components/Track';



function App() {
  return (
    <div >

      <Header />
      <Hero />
      <About />
      <Services />
      <Track />
      {/* <Inventory/> */}
      <HowItWorks />
      <Frequently />
      <Proposel />
      <Footer />
      <Login />
      <SignUp />
      
    </div>
  );
}

export default App;
