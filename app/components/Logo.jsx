import React from 'react'
import Link from 'next/link'
import { StyledLogoWrapperDiv, StyledLogoText } from '../theme'
import { FaFirstOrder } from 'react-icons/fa'

const Logo = () => {
  return (
    <div className={StyledLogoWrapperDiv}>
      <Link href='/'>
        <div className={StyledLogoText}>
          BOO <FaFirstOrder />
          DOO
        </div>
      </Link>
    </div>
  )
}

export default Logo
