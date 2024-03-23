
import "./App.css";
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Sidebar from "./Siderbar";
import Section from "./Section";


function App() {
  return (
    <>
     <Header/>
     <Nav/>
     <div style={{ display: 'flex' }}>
        <Sidebar />
        <Section />
      </div>
     <Footer/>
    </>
  );
}

export default App;
