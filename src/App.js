
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


//Komponentler gelecek
import Navbar from './components/Navbar'
import Header from './components/Header' 
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import Experience from './components/Experience'
import ContactUs from './components/ContactUs';
import Footer from './components/Footer'

function App() {
  return (
    <div className="container-fluid">

      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <ContactUs />
      <Footer />

    </div>

  );
}

export default App;
