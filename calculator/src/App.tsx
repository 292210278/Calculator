import { useState } from "react";
import "./App.css";
import ExchangeRat from "./components/ExchangeRate";
import Hex from "./components/hex";
import Weight from "./components/weight";

function App() {
  const [active, setActive] = useState("");
  return (
    <div
      className="container"
      onClick={(e) => {
        switch (e.target.innerHTML) {
          case "IBM计算":
            if (active === "weight") {
              setActive("");
            } else setActive("weight");
            break;
          case "汇率计算":
            if (active === "exchangeRate") {
              setActive("");
            } else setActive("exchangeRate");
            break;
          case "进制转换":
            if (active === "hex") {
              setActive("");
            } else setActive("hex");
            break;
        }
      }}
    >
      <ExchangeRat act={active === "exchangeRate" ? "active" : ""} />
      <Hex act={active === "hex" ? "active" : ""} />
      <Weight act={active === "weight" ? "active" : ""} />
    </div>
  );
}

export default App;
