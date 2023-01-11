import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const [avatarClicked, setAvatarClicked] = useState<boolean>(false);
  console.log(avatarClicked);
  return (
    <div className="App">
      <Navbar
        avatarClicked={avatarClicked}
        setAvatarClicked={setAvatarClicked}
      />
    </div>
  );
}

export default App;

// 4. Przy kliknięciu na avatar: jeżeli stan avatarClicked jest ustawiony na false to zmień na true. Jeżeli jest ustawiony na true to zmień na false. Stwórz do tego odpowiednią funkcję i przypisz ją do onClicka na avatarze.
