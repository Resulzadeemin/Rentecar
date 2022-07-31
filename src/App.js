import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Blog from "./Components/Blog/Blog"
import Ourcar from "./Components/OurCar/Ourcar";
import Category from "./Components/Category/Category";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <Blog />
        <Ourcar />
        <Contact />
        <Footer />
        {/* <Category componentName={<Ourcar/>} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
