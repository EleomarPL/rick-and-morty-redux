import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'

import Icon from '../common/Icon'
import SwitchColor from './SwitchColor'

const NavHeader = () => {
  return (
    <Nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <NormalLink className="navbar-brand" to="/">Rick and Morty</NormalLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <Icon className="bi bi-list" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLinkPersonalized className="nav-link" to="/">Characters</NavLinkPersonalized>
            </li>
            <li className="nav-item">
              <NavLinkPersonalized className="nav-link" to="/episodes">Episodes</NavLinkPersonalized>
            </li>
            <li className="nav-item">
              <NavLinkPersonalized className="nav-link" to="/locations">Locations</NavLinkPersonalized>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <SwitchColor />
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  border-bottom: 1px solid var(--border-primary);
  color: var(--text-primary);
  background-color: var(--bg-primary);
`
const NavLinkPersonalized = styled(NavLink)`
  color: var(--text-primary);
  &.active {
    color: var(--text-secondary);
    border-bottom: 1px solid var(--text-secondary);
  }
  &:hover {
    color: var(--text-secondary);
  }
`
const NormalLink = styled(Link)`
  color: var(--text-primary);
  &:hover {
    color: var(--text-primary);
  }
`

export default NavHeader
