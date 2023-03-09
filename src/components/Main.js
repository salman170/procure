import About from "./HomePage/About"
import Footer from "./HomePage/Footer"
import Frequently from "./HomePage/Frequently"
import Headers from "./HomePage/Header"
import Hero from "./HomePage/Hero"
import Proposel from "./HomePage/Proposel"
import Services from "./HomePage/Services"
import Track from "./HomePage/Track"
import HowItWorks from "./HowItWorks"


const Main = () => {
  return (
    <div>
      <Headers />
      <Hero />
      <About />
      <Services />
      <Track />
      {/* <Inventory/> */}
      <HowItWorks />
      <Frequently />
      <Proposel />
      <Footer />
    </div>
  )
}

export default Main
