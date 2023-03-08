import { NavBar } from "./components/navbar";
import { Home } from "./components/home";
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <>
      <NavBar {...{ setShowMenu, showMenu }} />
      <Home showMenu={showMenu} />
    </>
  );
}

export default App;
