import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
function App() {
  const [avatarClicked, setAvatarClicked] = useState<boolean>(false);
  console.log(avatarClicked);
  return (
    <div className="App">
      <Navbar setAvatarClicked={setAvatarClicked} />
      <HomePage />
    </div>
  );
}

export default App;
