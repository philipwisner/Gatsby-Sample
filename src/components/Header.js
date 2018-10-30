import React, { Component } from 'react'
import { Link } from 'gatsby'

import './Header.css'

class Header extends Component {
  state = {
    menuOpen: false,
  }

  handleClick = () => {
    this.setState(state => {
      const menuOpen = state.menuOpen === false ? true : false

      return { menuOpen }
    })
  }

  renderMenu = () => {
    return <div className="Header__menu">Menu</div>
  }

  render() {
    const { className } = this.props
    const { menuOpen } = this.state

    const blur = menuOpen ? 'is-blurred' : null

    const cn = 'Header ' + className + ' ' + blur

    return (
      <div className={cn}>
        <Link className="Header__name" to="/">
          Gritty
        </Link>
        <div
          className="Header__nav"
          onClick={() => {
            this.handleClick()
          }}
        >
          <div className="Header__nav-hamburger" />
        </div>
        {menuOpen && this.renderMenu()}
      </div>
    )
  }
}

export default Header
