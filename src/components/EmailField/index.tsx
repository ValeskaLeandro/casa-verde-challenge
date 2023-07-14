import { Section, Input } from "./styled"
import { AiOutlineMail } from "react-icons/ai";
const EmailField = () => {
  return (
    <Section>      
      <div>
        <AiOutlineMail/>      
        <Input placeholder={`Insira seu e-mail`}/>
      </div>
      <button>Assinar newsletter</button>
    </Section>
  )
}

export default EmailField