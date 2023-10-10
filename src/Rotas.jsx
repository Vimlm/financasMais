import { Route, Routes, BrowserRouter } from "react-router-dom"
import { ThemeProviderStyle } from "./styles/theme"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global.style"

import Login from "./pages/Login/Login"
import Cadastro from "./pages/Cadastro/Cadastro"
import LandingPage from "./pages/LandingPage/LandingPage"
import Dashboard from "./pages/Transacoes/Dashboard/Dashboard"
import QuemSomos from "./pages/QuemSomos/QuemSomos"
import Transacoes from "./pages/Transacoes/Transacoes"
import Entrada from "./pages/Transacoes/Entrada/Entrada"
import Saida from "./pages/Transacoes/Saida/Saida"

const Rotas = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={ThemeProviderStyle}>
        <GlobalStyle></GlobalStyle>
          <Routes>
            <Route path='/' element={<LandingPage />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/cadastro' element={<Cadastro />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/about' element={<QuemSomos />}/>
            <Route path='/transacoes/:tipo' element={<Transacoes />} />
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/entrada' element={<Entrada />}/>
            <Route path='/saida' element={<Saida />}/>
          </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default Rotas
