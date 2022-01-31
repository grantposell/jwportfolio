import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home"
import Login from "./components/login"
import Contact from "./components/contact"
// import PrivateRoute from "./components/PrivateRoute"
import Signup from "./components/signup"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"
import Portfolio from "./components/portfolio"
import Manage from "./components/manage"

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">SignUp</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="w-100">
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/update-profile" element={<UpdateProfile />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/managed" element={<Manage />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
      <footer style={{display: 'flex', position:'fixed', left: '0', right: '0', bottom: '0', height:'50px', width: '100%', backgroundColor: 'black', borderTop: '1px solid white', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{color: 'white',  }}>Joseph Woehling © {(new Date().getFullYear())}</p>
      </footer>
    </div>
  )
}

export default App




// import React, { Component } from 'react';
// import './App.css';
// import { Layout, Header, Navigation, Content, Footer } from 'react-mdl';
// import { Link } from 'react-router-dom';
// // import NYC from './assets/NYC.jpeg';
// import Main from "./components/main";
// import { AuthProvider } from './contexts/AuthContext';

// class App extends Component {
//   render() {
//     return (
//       <div style={{ height: '100vh', position: 'relative' }}>
//         <Layout>
//           <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">Joe Woehling</Link>} scroll>
//             <Navigation>
//               <Link to="/">Home</Link>
//               <Link to="/portfolio">Portfolio</Link>
//               <Link to="/contact">Contact</Link>
//               <Link to="/manage">Manage</Link>
//               <Link to="/login">Login</Link>
//             </Navigation>
//           </Header>
//           <Content>
//               <Main></Main>
//           </Content>
//           <Footer>
//             <p style={{ display: 'grid', placeItems: 'center', color: 'white', }}>Joseph Woehling © {(new Date().getFullYear())}</p>
//           </Footer>
//         </Layout>
//       </div >
//     );
//   }
// }

// export default App;
