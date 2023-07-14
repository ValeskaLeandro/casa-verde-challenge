import { H1, P } from "./styled"

interface TitleProps {
  subtitle: string,
  mainTitle: string
}
const Title = ({subtitle, mainTitle}: TitleProps) => {
  return (
    <>
    <P>{subtitle}</P>
    <H1>{mainTitle}</H1>
    </>
  )
}

export default Title