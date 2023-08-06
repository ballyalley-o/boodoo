'use client'
import { useState } from 'react'
import { useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
// styles
import {
  StyledRegisterContainerDiv,
  StyledRegisterHeaderH1,
  StyledFormWrapperForm,
  StyledRegisterButton,
} from '../theme'
// assets
import { toast } from 'react-toastify'
// components
import InputField from '../components/Forms/InputField'
// constants
import { SNACKS, FORMLABELS, HEADERS, BUTTONS } from '../constants'
import { complete, home, button_type } from '../config'

const RegisterPage = () => {
  const { isLoaded, signUp, setActive } = useSignUp()
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [pendingVerification, setPendingVerification] = useState(false)
  const [code, setCode] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isLoaded) return
    try {
      await signUp.create({
        first_name: firstName,
        last_name: lastName,
        email_address: email,
        username,
        password,
      })
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
      setPendingVerification(true)
      toast.success(SNACKS.REGISTER_SUCCESS)
    } catch (error) {
      console.log(error)
      toast.error(error)
    }
  }

  const onPressVerify = async (e) => {
    e.preventDefault()
    if (!isLoaded) return

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      })
      if (completeSignUp.status !== complete) {
        // investigate the response, to see if there was an error or if the user needsto complete more steps
        toast.error(SNACKS.VERIFY_CODE_INVALID)
        return
      }
      if (completeSignUp.status === complete) {
        await setActive({ session: completeSignUp.createdSessionId })
        toast.success(SNACKS.VERIFY_SUCCESS)
        router.push(home)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <div className={StyledRegisterContainerDiv} style={{ width: '500px' }}>
      <h1 className={StyledRegisterHeaderH1}>{HEADERS.REGISTER_HEADER}</h1>
      {!pendingVerification && (
        <form onSubmit={handleSubmit} className={StyledFormWrapperForm}>
          <InputField
            label={FORMLABELS.FIRST_NAME.label}
            name={FORMLABELS.FIRST_NAME.name}
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
          />
          <InputField
            label={FORMLABELS.LAST_NAME.label}
            name={FORMLABELS.LAST_NAME.name}
            onChange={(e) => {
              setLastName(e.target.value)
            }}
            required
          />
          <InputField
            type={FORMLABELS.EMAIL.type}
            label={FORMLABELS.EMAIL.label}
            name={FORMLABELS.EMAIL.name}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required
          />
          <InputField
            label={FORMLABELS.USERNAME.label}
            name={FORMLABELS.USERNAME.name}
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
          <InputField
            type={FORMLABELS.PASSWORD.type}
            label={FORMLABELS.PASSWORD.label}
            name={FORMLABELS.PASSWORD.name}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required
          />
          <button type={button_type} className={StyledRegisterButton}>
            {BUTTONS.REGISTER}
          </button>
        </form>
      )}
      {pendingVerification && (
        <form
          action=''
          onSubmit={onPressVerify}
          className={StyledFormWrapperForm}
        >
          <InputField
            label={FORMLABELS.VERIFY.label}
            name={FORMLABELS.VERIFY.name}
            onChange={(e) => {
              setCode(e.target.value)
            }}
          />
          <button type={button_type} className={StyledRegisterButton}>
            {BUTTONS.VERIFY}
          </button>
        </form>
      )}
    </div>
  )
}

export default RegisterPage
