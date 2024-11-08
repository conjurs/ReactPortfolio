import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <div className="flex flex-col gap-0">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
