import EmailField from '../EmailField'
import Title from '../Title'
import { Section, Main } from './styled'

const MainBanner = () => {
  return (
    <Section>      
      <div className='container-titles'>
      <Main>
        <Title subtitle='Sua casa com as' mainTitle='melhores plantas' />
        <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
        <EmailField />
      </Main>
      <aside>
        <img src="/imagem-hero 1.png" alt="Um linda planta em um jarro de fibra transado." />
      </aside>  
      </div>    
    </Section>
  )
}

export default MainBanner