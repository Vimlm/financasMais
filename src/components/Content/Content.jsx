/* eslint-disable react/prop-types */
import Style from './Content.module.css'

const Content = ({titulo, descricao, paragrafo, paragrafoCont}) => {
  return (
    <section className={Style.banner}>
      <h1 className={Style.titulo}>{titulo}</h1>
      { descricao && <h2 className={Style.descricao}>{descricao}</h2> }
      { paragrafo && <p className={Style.paragrafo}>{paragrafo}</p> }
      { paragrafoCont && <p className={Style.paragrafo}>{paragrafoCont}</p> }
    </section>
  )
}

export default Content
