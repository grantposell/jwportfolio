import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content, Footer } from 'react-mdl';
import { Link } from 'react-router-dom';
// import NYC from './assets/NYC.jpeg';
import Main from "./components/main";
import { AuthProvider } from './contexts/AuthContext';

class App extends Component {
  render() {
    return (
      <div style={{ height: '100vh', position: 'relative' }}>
        <Layout>
          <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">Joe Woehling</Link>} scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/manage">Manage</Link>
              <Link to="/login">Login</Link>
            </Navigation>
          </Header>
          <Content>
              <Main></Main>
          </Content>
          <Footer>
            <p style={{ display: 'grid', placeItems: 'center', color: 'white', }}>Joseph Woehling © {(new Date().getFullYear())}</p>
          </Footer>
        </Layout>
      </div >
    );
  }
}

export default App;
