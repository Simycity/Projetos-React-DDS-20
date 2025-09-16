import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FirstComponent } from "./components/FirstComponent";
import { SecondComponent } from "./components/SecondComponent";
import { TemplateExpressions } from "./components/TemplateExpressions";
import { Events } from "./components/Events";
import { MostrarImagens } from "./components/MostrarImagens";
import { PcTop } from "./components/PcTop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <FirstComponent />
      <SecondComponent />
      <TemplateExpressions /> */}

      <Events></Events>
      <MostrarImagens></MostrarImagens>
      <PcTop></PcTop>
    </>
  );
}

export default App;
