import './App.css';
import "./style.css";
import myVideo from "./myVideo.mp4";
import imageSrc from "./imageInSrc.jpg";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw"}}>

        <h1 class="title red">Kelechi Precious Nwachukwu </h1>

        <br />

        <img src={imageSrc} alt="imageInSrc" />

        <br />

        <img src="/imageInPublic.jpg" alt="imageInSrc" />

      </div>

      <video width="320" height="240" controls>

        <source src={myVideo} type="video/mp4" />

      </video>
    </div>
  );
}

export default App;
