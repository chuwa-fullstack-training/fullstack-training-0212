import React from 'react';
import './hw2.css';

const Header = () => {
  return <header>Header</header>;
};

const Nav = () => {
  return <nav>Nav</nav>;
};

const Aside = () => {
  return <aside>Aside</aside>;
};

const Section = () => {
  return <section>Section</section>;
};

const Footer = () => {
  return <footer>Footer</footer>;
};

const App = () => {
  return (
    <div className="container">
      <Header />
      <Nav />
      <main className="main-content">
        <Aside />
        <Section />
      </main>
      <Footer />
    </div>
  );
};

export default App;
