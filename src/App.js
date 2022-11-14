import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
//partials
import Header from './components/partials/header';
import Footer from './components/partials/footer';
import Navbar from './components/partials/navbar';
//pages
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/contact';
import Technologies from './components/pages/technologies';
import PrivavyPolicy from './components/pages/privacypolicy';
import Home from './components/pages/home';

function App() {
  return (
    <div className="main-web-view">
      <Header/>
      <Navbar/>
      <Router>  
          <Routes >
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/technologies" component={Technologies}/>
            <Route path="/privacypolicy" component={PrivavyPolicy}/>              
            <Route exact path="/" component={Home}/>
          </Routes >
        
      </Router>

      <Footer/>
    </div>
  );
}

export default App;
