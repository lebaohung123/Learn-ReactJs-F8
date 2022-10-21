import { useState } from "react";
import "./App.css";

function App() {
  const arr = ["i9core12", "ram8gb", "sortage128gb"];
  const [random, setRandom] = useState();
  const handleOnRanDom = () => {
    const index = Math.floor(Math.random()*arr.length)
    setRandom(arr[index]);
  };
  return (
    <div className="App">
      <h1>{random || "chua co phan thuong nha em iu"}</h1>
      <button onClick={handleOnRanDom}>random</button>
    </div>
  );
}

export default App;
