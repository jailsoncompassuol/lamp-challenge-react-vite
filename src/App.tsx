import "./App.css";
import { useState } from "react";
import { Lamp } from "./components/Lamp";
import { LampLazy } from "./components/LampLaze";

const App = () => {
  const [countClickOn, setCountClickOn] = useState(0);
  const [isOn, setIsOn] = useState(false);

  return (
    <main className="app-main">
      <h1>Hello, Lamp!</h1>
      <section className="app-groups">
        <div className="app-groups-lamp">
          <Lamp />
        </div>
        <div className="app-lamp-lazy">
          <LampLazy isOn={isOn} onCountClickOn={setCountClickOn} />
          <button type="button" className="button-lamp" onClick={() => setIsOn(!isOn)}>{isOn ? 'OFF' : 'ON'}</button>
          <span className="app-lamp-lazy-click">{countClickOn}</span>
        </div>
      </section>
    </main>
  );
};

export default App;
