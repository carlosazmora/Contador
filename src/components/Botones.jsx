export const Botones = ({ contador, sumar, restar }) => {

    return (
        <>
            <button className="btn btn-primary" onClick={(event) => sumar(contador)}> + </button>
            <button className="btn btn-primary" onClick={(event) => restar(contador)}> - </button>
        </>
    )
}