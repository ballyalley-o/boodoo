import PropTypes from 'prop-types'
// styles
import { StyledInputField, StyledInputLabel } from '../../theme'

const InputField = ({ label, name, onChange, type }) => {
  return (
    <div>
      <label htmlFor={name} className={StyledInputLabel}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={label}
        onChange={onChange}
        className={StyledInputField}
        required
      />
    </div>
  )
}

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
}

InputField.defaultProps = {
  label: 'Label',
  type: 'text',
}

export default InputField
