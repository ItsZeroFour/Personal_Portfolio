import "./App.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <div className="container">
        <Projects />
        <Skills />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
