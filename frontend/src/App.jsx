
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home'
import Footer from './Pages/Footer';
import Copyright from './Components/Copyright';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default App