
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'
import Contact from './pages/ContactUs'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='services' element={<Services/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='blog' element={<Blog/>} />
        <Route path='*' element={<NotFound/>} />
      </Route>
    </Routes>
  )
}

export default App
