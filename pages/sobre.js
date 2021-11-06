import styled from 'styled-components'

const TitleWrapper = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

// eslint-disable-next-line react/prop-types
const Title = ({children}) => <TitleWrapper>{children}</TitleWrapper>

export default function Home() {
  return <Title>Sobre</Title>
}
