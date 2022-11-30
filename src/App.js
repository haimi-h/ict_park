import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Switch,Route } from 'react-router-dom'; 
import Card from './Components/Card';
import Content from './Components/Content';
import Footer from './Components/footer';
import Middle from './Components/middle';
import CommentBox from './Components/CommentBox';


 

function App() {
  return (
  
   <div>
   <Navbar/>
   <Content/>
   <Card/>
   <Middle/>
   <CommentBox/>
   <Footer/>
   
   </div>
   
    )
}

export default App;
