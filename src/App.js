import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
import About from "./components/About";



function App() {
  return (
    <>
      <Navbar title="text-convertor" />    
      <div className="container">
      <TextForm heading="Paste the Text here"/>
      </div>
    </>
  );
}

export default App;
