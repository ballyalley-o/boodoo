import React from 'react'
import { UserButton, auth } from '@clerk/nextjs'
// styles
import { StyledNavDiv, StyledLinkWrapper, StyledLinkWrapperDiv } from '../theme'
// components
import Logo from './Logo'
import LinkCombo from './LinkCombo'
// assets
import { FaSignInAlt } from 'react-icons/fa'
// constants
import { BUTTONS } from '../constants'
import { home, signIn, signUp, profile } from '../config'

function Header() {
  const { userId } = auth()
  console.log(userId)
  return (
    <>
      <nav className={StyledNavDiv}>
        <Logo />
        <div className={StyledLinkWrapperDiv}>
          {!userId && (
            <>
              <LinkCombo href={signIn} content={<FaSignInAlt />} />|
              <LinkCombo href={signUp} content={BUTTONS.SIGN_UP} />
            </>
          )}
          {userId && <LinkCombo href={profile} content={BUTTONS.PROFILE} />}
          <div className={StyledLinkWrapper}>
            <UserButton afterSignOutUrl={home} />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
