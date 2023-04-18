export const BarraValor = ({ actualizar, contador }) => {

  return (
    <>
      <p></p>
      <input type="number" className="form-control" placeholder="¿Valor Contador?" value={contador} onChange={(event) => actualizar(event.target.value)}></input>
    </>
  )
}