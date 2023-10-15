import Contact from "./components/Contact";
import Hi from "./components/Hi";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <Navbar />
      <div className="px-10">
        <Hi />
        <div className="xl:px-[10%]">
          <Projects />
          <Technologies />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
