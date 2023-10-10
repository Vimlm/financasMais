import { useState } from "react";
import { Link } from "react-router-dom"

const Dashboard = () => {
  const [contador, setContador] = useState(0)

  const hadleSetContador = () => {
    setContador(contador + 1)
  }

  return (
    <>
      <p>Dashboard</p>
      <Link to='/transacoes/entrada'>Entrada</ Link>
      <Link to='/transacoes/saida'>Saida</ Link>
      <p>Contagem: {contador}</p>
      <button onClick={hadleSetContador}>Adicionar</button>
    </>
  )
}

export default Dashboard
