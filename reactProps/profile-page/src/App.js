import "./App.css";
import Profile from "./profile/profile";

function App() {
  const handleName = (fullName) => alert(fullName);
  const styleProfile = {
    margin: 20,
    padding: 20,
    fontFamily: "Barlow Condensed",
    textAlign: "center",
    border: "5px solid #320d3e",
    backgroundColor: "#d902ee",
    borderRadius: 25,
  };
  const styleImg = { width: 300, border: "5px solid #f162ff", borderRadius: 10,};

  
  //handleName sends an alert message with the name of the profile user.
  return (
    <div style={styleProfile}>
      <Profile
        fullName="Kelechi Precious Nwachukwu"
        profession="FullStack Developer"
        handleName={handleName}
      >
        <img src="/ProfileImg.jpg" alt="" style={styleImg} />
      </Profile>
    </div>
  );
}

export default App;
