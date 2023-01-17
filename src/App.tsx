import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
function App() {
  const [avatarClicked, setAvatarClicked] = useState<boolean>(false);
  return (
    <div className="App">
      <BrowserRouter>
        {/* STATIC */}
        <Navbar setAvatarClicked={setAvatarClicked} />
        {/* STATIC */}
        {/* DYNAMIC */}
        <Routes>
          <Route path="/" element={<h1>To jest pusty url</h1>} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
        {/* DYNAMIC */}
        {/* STATIC */}
        {/* STATIC */}
      </BrowserRouter>
    </div>
  );
}

export default App;





// 3. JSX:
// - wszystko ma być obwinięte w komponent ListItem (MUI)
// - w środku ListItem wszystko ma być obwinięte komponentem Card (MUI), props komponentu Card: variant na outlined, w sx'ach margines dolny na 10px
// - w środku Card wszystko obwinięte tagiem a (zwykły anchor z htmla), props: href na url z artykułu który zostaw przekazany propsem do Article.tsx, target na __blank, w style textDecoration none
// - w środku <a> ma się znaleźć tag img (zwykły htmlowy) z src ustawionym na urlToImage z artykułu z propsów, alt ustawiony na title artykułu z propsów i w style width ustawione na 100%
// - obok tagu img ma się znaleźć komponent ListItemText (z MUI) w sx'ach color black, mx 5%. W środku ListItemText wyświetl tytuł artykułu z propsów.
