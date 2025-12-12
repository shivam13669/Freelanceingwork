import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import FindYourNextAdventure from './pages/FindYourNextAdventure'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import RentGear from './pages/RentGear'
import Careers from './pages/Careers'
import About from './pages/About'
import FAQs from './pages/FAQs'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/activities" element={<FindYourNextAdventure />} />
          <Route path="/find-your-next-adventure" element={<FindYourNextAdventure />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rent-gear" element={<RentGear />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<FAQs />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
