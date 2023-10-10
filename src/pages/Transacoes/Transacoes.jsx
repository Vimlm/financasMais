import { useParams } from "react-router-dom"

const Transacoes = () => {
  const params = useParams()

  return (
    <>
      <p>Tipo de transação {params.tipo}</p>
    </>
  )
}

export default Transacoes
