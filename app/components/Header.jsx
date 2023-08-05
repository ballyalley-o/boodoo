import React from 'react'
import Link from 'next/link'
import { UserButton, auth } from '@clerk/nextjs'
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
  const { userId } = auth()
  console.log(userId)
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
          {!userId && (
            <>
              <Link href='/sign-in' className={StyledNavLink}>
                <FaSignInAlt />
              </Link>
              |
              <Link href='/sign-up' className={StyledNavLink}>
                Sign Up
              </Link>
            </>
          )}
          {userId && (
            <Link
              href='profile'
              className='text-white hover:text-gray-300 mr-4'
            >
              Profile
            </Link>
          )}
          <div className='ml-auto'>
            <UserButton afterSignOutUrl='/' />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
