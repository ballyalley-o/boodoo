// styles
import { StyledHomeLabelH1 } from '../theme'
import { FaFirstOrder } from 'react-icons/fa'
// constants
import { brand } from '../config'

const LogoHome = () => {
  return (
    <div>
      <h1 className={StyledHomeLabelH1}>
        <FaFirstOrder />
        {brand}
      </h1>
    </div>
  )
}

export default LogoHome
