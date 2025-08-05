
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home'
import Trending from './Components/Trending/Trending'
import Industry from './Components/Industry/Industry'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Trending /><Industry /></>} />
      </Routes>
    </div>
  )
}

export default App