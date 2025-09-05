import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Header from "./components/header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/SignUp"
import LogOutBtn from "./components/Header/LogOutBtn"

function App() {
  const [user, setUser] = useState(null)
  const [authStatus, setAuthStatus] = useState(false)

  return (
    <div>
      {/* Pass authStatus + setAuthStatus to Header */}
      <Header authStatus={authStatus} setAuthStatus={setAuthStatus} user={user}  />

      <main>
        <Routes>
          <Route path="/" element={<Home authStatus={authStatus} />} />
          <Route path="/login" element={<Login setAuthStatus={setAuthStatus}  setUser={setUser}  />} />
          <Route path="/signup" element={<Signup setAuthStatus={setAuthStatus} setUser={setUser}/>} />
          <Route path="/logout" element={<LogOutBtn setAuthStatus={setAuthStatus} />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
