import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Signin from "./auth/Signin"
import Signup from "./auth/Signup"
import LandingPage from "./components/LandingPage"
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
