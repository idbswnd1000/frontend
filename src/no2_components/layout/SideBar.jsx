import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Aside = styled.aside`
  width: 220px;
  background: #1e293b;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    left: 0;

    width: 220px;
    height: calc(100vh - 60px);

    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(-100%)'};

    transition: 0.3s;
    z-index: 100;
  }
`

const MenuLink = styled(NavLink)`
  color: white;
  text-decoration: none;

  padding: 10px;
  border-radius: 6px;

  transition: 0.2s;

  &:hover {
    background: #334155;
  }

  &.active {
    background: #2563eb;
  }
`

const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <Aside isOpen={isOpen}>
      <MenuLink to="/" onClick={() => setIsOpen(false)}>
        Home
      </MenuLink>

      <MenuLink to="/todo" onClick={() => setIsOpen(false)}>
        할일
      </MenuLink>

      <MenuLink to="/employee" onClick={() => setIsOpen(false)}>
        고용인 정보
      </MenuLink>
    </Aside>
  )
}

export default SideBar