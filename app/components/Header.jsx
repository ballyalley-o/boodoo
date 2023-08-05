import React from 'react'
import Link from 'next/link'
// styles
import {
  StyledNavDiv,
  StyledLogoText,
  StyledNavLink,
  StyledLinkWrapperDiv,
} from '../theme'
// assets
import { FaFirstOrder, FaSignInAlt } from 'react-icons/fa'

function Header() {
  return (
    <>
      <nav className={StyledNavDiv}>
        <div className='flex items-center'>
          <Link href='/'>
            <div className={StyledLogoText}>
              BOO <FaFirstOrder />
              DOO
            </div>
          </Link>
        </div>
        <div className={StyledLinkWrapperDiv}>
          <Link href='/sign-in' className={StyledNavLink}>
            <FaSignInAlt />
          </Link>
          |
          <Link href='/sign-up' className={StyledNavLink}>
            Sign Up
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Header
