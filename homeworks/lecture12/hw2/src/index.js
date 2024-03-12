import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Aside from './components/aside';
import Footer from './components/footer';
import Header from './components/header';
import Nav from './components/nav';
import Section from './components/section';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{display:"grid", textAlign:"center",gap:"10px"}}>
      
      <Header/>
      <Nav />
       
      <Aside />
      <Section />
        
      <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
