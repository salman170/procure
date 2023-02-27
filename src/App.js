import About from "./components/About";
import Footer from "./components/Footer";
import Frequently from "./components/Frequently";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Inventory from "./components/Inventory";
import Proposel from "./components/Proposel";
import Services from "./components/Services";
import Track from "./components/Track";

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Frequently/>
      <Services/>
      <Track/>
      <Inventory/>
      <HowItWorks/>
      <Proposel/>
      <Footer/>
    </div>
  );
}

export default App;
