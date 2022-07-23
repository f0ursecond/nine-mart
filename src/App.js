import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import Stock from './components/stock';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/header';
import View from './components/view';



function App() {
  return (
    
    <Router> 
          
      <div className='App'>
        <Header/>
        <Routes>
           
            <Route path="/stock" element={<Stock/>} />
            <Route exact path="/" element={<Card/>} />
            <Route path = "/view" element={<View />} />
            
        </Routes>
      </div>
    </Router>
  );  
}

export default App;
