import Header from '../../components/Header/Header'
import Content from '../../components/Content/Content'
import Button from '../../components/Button/Button'
import banner1 from '/LP-banner1.svg'
import banner2 from '/LP-banner2.svg'
import { ContainerLP, WelcomeSection, DesafioSection, EmailSection } from './landingPage.styled'

const LandingPage = () => {
  return (
    <main>
      <ContainerLP>
        <WelcomeSection>
          <section className='sectionWelcome'>
            <div className="container">
              <Header path='/' path2='/about' path3='/login' path4='/cadastro' firstText='Home' secondText='Quem•Somos' thirdText='Login'/>
                <div className='containerLP'>
                  <Content
                    titulo='Bem-vindo ao Finanças+'
                    descricao='O seu aliado para uma gestão financeira bem-sucedida e a realização dos seus objetivos financeiros.'
                    paragrafo='Nosso aplicativo foi projetado para proporcionar a você o controle total sobre suas finanças pessoais, tornando o processo de gerenciar suas receitas, despesas e metas financeiras uma tarefa simples e prazerosa.'
                  />
                  <img src={banner1} alt="Vetor de uma mulher de sucesso em cima de uma pilha de moeda" />
                </div>
            </div>
          </section>
        </WelcomeSection>

        <DesafioSection>
          <section className='sectionDesafio'>
            <div className="container">
              <div className='containerLP'>
                <img src={banner2} alt="" />  
                <Content 
                  titulo='O desafio Financeiro'
                  descricao='Sabemos que lidar com finanças pode ser um desafio para muitas pessoas.'
                  paragrafo='  A falta de organização, o desconhecimento das despesas e o medo de não conseguir atingir suas metas financeiras são obstáculos comuns enfrentados por todos nós.'
                  paragrafoCont='É por isso que desenvolvemos o Finanças+ - para ajudá-lo a superar esses desafios e alcançar a liberdade financeira que você tanto deseja.'
                />
              </div>
            </div>
          </section>
        </DesafioSection>

        <EmailSection>
          <section className='sectionEmail'>
            <div className="container">
              <Content 
                titulo='Transforme sua relação com o dinheiro'
                paragrafo='Cadastre-se no Finanças+ agora mesmo e comece sua jornada rumo a uma vida financeira mais próspera e realizada'
              />
              <div className="email">
                <input type="text" />
                <Button text='Comece Agora' variant='primary'/>
              </div>
            </div>
          </section>
        </EmailSection>
      </ContainerLP>
    </main>
  )
}

export default LandingPage
