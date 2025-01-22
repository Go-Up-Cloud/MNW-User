import './App.css'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store.js'
import Footer from './Componentes/Footer/Footer'
import Home from './Componentes/HomePpal/Home'
import Navbar from './Componentes/Navbar/Navbar'
import Events from './Componentes/Events/Events.jsx';
import QuienesSomos from './Componentes/QuienesSomos/QuienesSomos';
import Ayuda from './Componentes/Ayuda/Ayuda';
import Registro from './Componentes/Registro/Registro';
import Singin from './Componentes/Registro/Login.jsx';
import Blog from './Componentes/Blog/Blog';
import Cards from './Componentes/Events/EventDetail';
import Contacto from './Componentes/Contacto/Contacto';
import RedirectPage from './Componentes/RedirectPage/RedirectPage';
import Perfil from './Componentes/Perfil/Perfil'
import Privacy from './Componentes/Privacy/Privacy.jsx';

//transbank
import Transbank from './Componentes/Transbank/Transbank';
import Success from './Componentes/Transbank/Status/Success';
import SuccessMob from './Componentes/Transbank/Mobile/Success.jsx';
import Failed from './Componentes/Transbank/Status/Failed.jsx';
import Commit from './Componentes/Transbank/Commit';
import CommitMobile from './Componentes/Transbank/Mobile/CommitMobile.jsx';
import Canceled from './Componentes/Transbank/Status/Canceled.jsx';


function App() {
  
  return (
    <Provider store={store}>
      <div className="app">
        
        <Routes>
          <Route exact path="/" element={<><Navbar/><Home/><Footer/></>} />
          <Route  path="/quienes-somos" element={<><Navbar/><QuienesSomos/><Footer/></>} />
          <Route  path="/eventos" element={<><Navbar/><Events/><Footer/></>} />
          <Route  path="/ayuda" element={<><Navbar/><Ayuda/><Footer/></>} />
          <Route  path="/singup" element={<><Registro/></>} />
          <Route  path="/singin" element={<><Singin/></>} />
          <Route  path="/blog" element={<><Navbar/><Blog/><Footer/></>} />
          <Route  path="/eventos/:id" element={<><Navbar/><Cards/><Footer/></>} />
          <Route  path="/transbank" element={<><Navbar/><Transbank/><Footer/></>} />
          <Route  path="/contacto" element={<><Navbar/><Contacto/><Footer/></>} />
          <Route  path="/privacy" element={<><Navbar/><Privacy/><Footer/></>} />
          <Route  path="/redirect" element={<RedirectPage/>} />
          <Route  path="/success" element={<Success/>} />
          <Route  path="/failed" element={<Failed/>} />
          <Route  path="/canceled" element={<Canceled/>} />
          <Route  path="/success-mobile" element={<SuccessMob/>} />
          <Route  path="/commit" element={<Commit/>} />
          <Route  path="/commit-mobile" element={<CommitMobile/>} />
          <Route  path="/perfil" element={<><Navbar/><Perfil/><Footer/></>} />

        </Routes>
      </div>
    </Provider>
  )
}


export default App
