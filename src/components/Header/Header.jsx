import style from './header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.logo}>Finanças+</h1>
      <nav>
        <ul className={style.menu}>
          <li><a className={style.btnMenu} href="">Home</a></li>
          <li><a className={style.btnMenu} href="">Quem Somos</a></li>
          <li><a className={style.btnMenu} href="">Entrar</a></li>
          <li><a className={style.btnMenuConta} href="">Criar Conta</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
