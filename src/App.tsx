import { useState } from "react";
import { calculatePlates } from "./utils/calculatePlates";
import { Barbell } from "./components/Barbell";

function App() {
  const [weight, setWeight] = useState("100");
  const plates = calculatePlates(Number(weight));

  return (
    <div>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <p>
        <Barbell plates={plates} />
      </p>
      <p>IPF Barbell Calculator</p>
    </div>
  );
}

export default App;
