/* eslint-disable react/prop-types */
import { LogoPrimary, LogoSecundary } from "./logo.styled"

const Logo = ({variant}) => {
  return (
    <>
      { variant == 'primary' && <LogoPrimary><h1 className='logo'>Finanças<span className='plus'>+</span></h1></LogoPrimary> }
      { variant == 'secundary' && <LogoSecundary><h1 className='logo'>Finanças<span className='plus'>+</span></h1></LogoSecundary>}
    </>
  )
}

export default Logo
