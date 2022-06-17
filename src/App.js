import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="snap-y snap-mandatory">
      <Navbar />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
