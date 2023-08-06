import Link from 'next/link'
import PropTypes from 'prop-types'
import { StyledNavLink } from '../theme'

const LinkCombo = ({ href, content }) => {
  return (
    <Link href={href} className={StyledNavLink}>
      {content}
    </Link>
  )
}

LinkCombo.propTypes = {
  href: PropTypes.string.isRequired,
  content: PropTypes.string,
}

export default LinkCombo
