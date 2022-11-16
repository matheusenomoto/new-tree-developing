import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
//partials
import Header from './components/partials/header.js';
import Footer from './components/partials/footer';
import Navbar from './components/partials/navbar.js';
//pages
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/contact';
import Technologies from './components/pages/technologies';
import PrivavyPolicy from './components/pages/privacypolicy';
import Home from './components/pages/home';

export default function App() {
  return (
    <div className="main-web-view">
      
      <Header/>
      <Navbar/>
      <Routes>
        <Route  path="/portfolio" element={<Portfolio/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route  path="/technologies" element={<Technologies/>}/>
        <Route  path="/privacypolicy" element={<PrivavyPolicy/>}/>
        <Route  path="/" element={<Home/>}/>
      </Routes>
      <Footer/>

    </div>
    
  );
}