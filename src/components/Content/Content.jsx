/* eslint-disable react/prop-types */
import { ContentStyled } from './content.styled'

const Content = ({titulo, descricao, paragrafo, paragrafoCont}) => {
  return (
    <ContentStyled>
      <section className='banner'>
        <h1 className='titulo'>{titulo}</h1>
        { descricao && <h2 className='descricao'>{descricao}</h2> }
        { paragrafo && <p className='paragrafo'>{paragrafo}</p> }
        { paragrafoCont && <p className='paragrafo'>{paragrafoCont}</p> }
      </section>
    </ContentStyled>
  )
}

export default Content
