import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import Calendar from "./pages/Calendar"
import Resume from "./pages/Resume"


const App = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
          <Route path="calendar" element={<Calendar />} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}
export default App