import './App.css';
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from './utils/Themes';

import Skills from './components/Skills';
import Education from './components/Education';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height:100%;
  overflow-x: hidden;
`;
// const Wrapper = styled.div`
//   background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
//   width: 100%;
//   clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
// `
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Router>
        <Navbar/>
        <Body>
         <Hero/>
          {/* <Wrapper> */}
            <Skills/>
            <Experience/>
            <Projects/>
            <Education/>
            <Contact/>
          {/* </Wrapper> */}
         
          <Footer/>
        </Body>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
