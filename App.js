import "./App.css";
import axios from "axios";

function App() {
  const user = {
    username: "",
    password: "",
    name: "",
    age: "",
  };
  //insert
  const registersuser = (e) => {
    e.preventDefault();
    //console.log("user")
    axios.post("/api/registration", user).then((res) => console.log(res.data));
  };
  //delete
  var deletename = "";
  const deleteuser = () => {
    axios.delete("/api/deleteuser/" + deletename)
      .then((res) => console.log(res));
  };
  //fetch user
  const fetchusers=()=>{
    axios.get("/api/list").then((res)=>console.log("data",res));
  };
  return (
    <div className="App">
      <h1>Register Here</h1>
      <input placeholder="uname"
        onChange={(e) => {
          user.username = e.target.value;
        }}
      />
      <input placeholder="password"
        onChange={(e) => {
          user.password = e.target.value;
        }}
      />
      <input placeholder="name" onChange={(e) => {
        user.password = e.target.value;
      }}
      />

      <input placeholder="age" onChange={(e) => {
        user.age = e.target.value;
      }}
      />
      <button type="Submit" onClick={registersuser}>Register</button>
      <input placeholder="name" onChange={(e) => { deletename = e.target.value }} />
      <button type="Submit" onClick={deleteuser}>Delete</button>
      <button onClick={fetchusers}>Fetch user</button>
    </div>
  );
}
export default App;
