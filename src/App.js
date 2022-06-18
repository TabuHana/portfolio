import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
// import Resume from "./components/Resume";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Contact />
      {/* <Resume /> */}
    </div>
  );
}

export default App;
