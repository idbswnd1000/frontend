import styled from 'styled-components'

const Header = styled.header`
  height: 60px;
  padding: 0 24px;
  background: white;
  border-bottom: 1px solid #ddd;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const MenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 24px;
    border: none;
    background: none;
    cursor: pointer;
  }
`

const Logo = styled.div`
  font-size: 22px;
  font-weight: bold;
`

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`

const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  cursor: pointer;
`

const HeaderBar = ({ setIsOpen }) => {
  return (
    <Header>
      <LeftBox>
        <MenuButton onClick={() => setIsOpen(prev => !prev)}>
          ☰
        </MenuButton>
        <Logo>Logo</Logo>
      </LeftBox>

      <ButtonBox>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </ButtonBox>
    </Header>
  )
}

export default HeaderBar