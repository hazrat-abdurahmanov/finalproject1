
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//Komponentler gelecek
import Navbar from './components/Navbar'
import Header from './components/Header' 

function App() {
  return (
    <div className="container-fluid">

      <Navbar />
      <Header />

    </div>

  );
}

export default App;
