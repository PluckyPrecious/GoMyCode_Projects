import "./App.css";
import NavBar from "./Components/NavBar";
import Layout from "./Components/Layout";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;