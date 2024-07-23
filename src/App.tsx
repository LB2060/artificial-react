import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Companies from './components/Companies'
import LearnMore from './components/LearnMore'
import Footer from './components/Footer'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Contact from './pages/Contact'
import { NotFound } from './pages/NotFound'
import { ToastContainer } from 'react-toastify'


function App() {


  return (
    <>

    <BrowserRouter>
    <Header/>
    <ToastContainer/>
    

    <Routes>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<Intro/>} />
      <Route path='/services' element={<Companies/>} />
      <Route path='/blog' element={<LearnMore/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
     
    
     
    </>
  )
}

export default App
