import React from 'react';
import './hw2.css';
class Header extends React.Component {
    render() {
        return (<header className="header">Header</header>);
    }
}

class Nav extends React.Component {
    render() {
        return (<nav className="nav">Nav</nav>);
    }
}

class Aside extends React.Component {
    render() {
        return (<aside className="aside">Aside</aside>);
    }
}

class Section extends React.Component {
    render() {
        return (<section className="section">Section</section>);
    }
}

class Footer extends React.Component {
    render() {
        return (<footer className="footer">Footer</footer>);
    }
}

class HW2Layout extends React.Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <Nav />
                <div className="main">
                    <Aside />
                    <Section />
                </div>
                <Footer />
            </div>
        );
    }
}
export default HW2Layout;