import { useState } from "react";
import { DesplegarValor } from "./components/DesplegarValor";
import { Botones } from "./components/Botones";
import { BarraValor } from "./components/BarraValor";

export function App() {
  const [contador, setContador] = useState(0)

  if (contador === "") {
    alert("¡No se puede dejar el contador sin valor!")
    setContador(0)
  }

  const sumar = () => {
    setContador(contador + 1)
  }

  const restar = () => {
    setContador(contador - 1)
  }

  const actuContador = (contador) => {
    setContador(contador)
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
      /><br /><br />

      <BarraValor
        contador={contador}
        actualizar={(valor) => actuContador(valor)}
      /><br />

    </div>
  );
}