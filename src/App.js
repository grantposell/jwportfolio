import React, { Component } from 'react';
import { Layout, Header, Navigation, Content, Footer } from 'react-mdl';
import { Link } from 'react-router-dom';
import NYC from './assets/NYC.jpeg';
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <div style={{ height: '100vh', position: 'relative' }}>
        <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:'none', color: 'white'}} to="/">Joe Woehling</Link>} scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/manage">Manage</Link>
            </Navigation>
          </Header>
          {/* <Header transparent style={{ color: 'black' }}>
            <Navigation>
              <Link style={{color: 'black', fontWeight: 'bold'}}to="/">Home</Link>
              <Link style={{color: 'black', fontWeight: 'bold'}}to="/portfolio">Portfolio</Link>
              <Link style={{color: 'black', fontWeight: 'bold'}}to="/contact">Contact</Link>
            </Navigation>
          </Header> */}
          <Content>
          <div className="page-content" />
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
