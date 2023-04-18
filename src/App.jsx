import { useState } from "react";
import { DesplegarValor } from "./components/DesplegarValor";
import { Botones } from "./components/Botones";

export function App() {
  const [contador, setContador] = useState(0)

  const sumar = () => {
    setContador(contador + 1)
  }

  const restar = () => {
    setContador(contador - 1)
  }

  return (
    <div className="App">
      <DesplegarValor
        contador={contador}
      />

      <Botones
        contador={contador}
        sumar={(cont) => sumar(cont)}
        restar={(cont) => restar(cont)}
      />

    </div>
  );
}