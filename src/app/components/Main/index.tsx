import * as S from './styles'

const Main = ({
  title = 'Efy.ai',
  description = 'Plataforma de Recursos Humanos com IA'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)
export default Main
