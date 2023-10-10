/* eslint-disable react/prop-types */
import { HeaderStyled } from './Header.styled.js'
import Logo from '../../components/Logo/Logo'
import Button from '../Button/Button'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({firstText, secondText, thirdText, path, path2, path3}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/cadastro')
  }

  return (
    <HeaderStyled>
      <header className='header'>
        <Logo variant='secundary'/>
        <nav>
          <ul className='menu'>
            <li><Link className='btnMenu' to={path}>{firstText}</Link></li>
            <li><Link className='btnMenu' to={path2}>{secondText}</Link></li>
            { thirdText && <li><Link className='btnMenu' to={path3}>{thirdText}</Link></li> }
            <Button onClick={handleClick} variant='primary' text='Criar Conta'/>
          </ul>
        </nav>
      </header>
    </HeaderStyled>
  )
}

export default Header
