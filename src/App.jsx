import './index.css'
import Intro from "./Intro"
import Signup from "./Signup"
import HealthReco from "./components/HealthReco"

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/rag-recipy-gen" element={<HealthReco />} />
      </Routes>
    </Router>
  )
}

export default App
