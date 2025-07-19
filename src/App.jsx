import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css';

// Default library
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// CustomComponents
import NavbarComponent from './components/Navbar';
import About from './components/Aboutus';
import Home from './components/Home';
import Joinus from './components/Joinus';
import Donate from './components/media/Donate';
import Gallery from './components/Gallery';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Refund from './components/Refund';
import Notification from './components/Notification';

function App() {
  const {innerWidth: width, innerHeight: height} = window;
  return (
    <>
        <Container fluid style={{"height":innerHeight}}>
          <NavbarComponent />
          <Notification /> 
          <Router>
            <Routes>
              <Route path="/" element= {<Home />} />
              <Route path="/gallery" element={<Gallery/>} />
              <Route path="/joinus" element={<Joinus/>} />
              <Route path="/contactus" element={<Contactus/>} />
              <Route path="/donate" element={<Donate/>} />
              <Route path="/privacy" element={<Privacy/>} />
              <Route path="/refund" element={<Refund/>} />
              <Route path="/about" element={<About/>} />
            </Routes>
          </Router>
          <Footer />
        </Container>
    </>
  )
}

export default App
