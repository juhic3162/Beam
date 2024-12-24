import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Smile from './Pages/Smile.jsx'
import Home from './Pages/Home.jsx'
import Impact from './Pages/Impact.jsx'
import Solutions from './Pages/Solutions.jsx'
import MyDay from './Pages/MyDay.jsx'
import Contact from './Pages/Contact.jsx'
import Layout from './Components/Layout.jsx'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Smile />}/>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />}/>
          <Route path="/impact" element={<Impact />}/>
          <Route path="/solutions" element={<Solutions />}/>
          <Route path="/myDay" element={<MyDay />}/>
          <Route path="/contact" element={<Contact />}/>
          </Route>
        </Routes>
    </Router>
  )
}
