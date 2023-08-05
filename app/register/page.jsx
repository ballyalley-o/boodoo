'use client'

import { useState } from 'react'
import { useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
// assets
import { toast } from 'react-toastify'
// components
import InputField from '../components/Forms/InputField'

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
      await signUp({
        first_name: firstName,
        last_name: lastName,
        email,
        username,
        password,
      })
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
      setPendingVerification(true)
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const onPressVerify = async (e) => {}

  return (
    <div
      className='border p-5 rounded border-black border'
      style={{ width: '500px' }}
    >
      <h1 className='text-2xl mb-4'>Create your account</h1>
      {!pendingVerification && (
        <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6'>
          <InputField
            label='First Name'
            name='first_name'
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
          />
          <InputField
            label='Last Name'
            name='last_name'
            onChange={(e) => {
              setLastName(e.target.value)
            }}
            required
          />
          <InputField
            type='email'
            label='Email'
            name='email'
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required
          />
          <InputField
            label='Username'
            name='username'
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
          <InputField
            label='Password'
            name='password'
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required
          />
          <button
            type='submit'
            className='w-full text-gray-300 bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-lg px-5 text-center py-2'
          >
            Create your account
          </button>
        </form>
      )}
      {pendingVerification && (
        <form action='' className='space-y-4 md:space-y-6'>
          <InputField
            label='Verification Code'
            name='code'
            onChange={(e) => {
              setCode(e.target.value)
            }}
          />
          <button
            type='submit'
            className='w-full text-gray-300 bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-lg px-5 text-center py-2'
          >
            Verify email
          </button>
        </form>
      )}
    </div>
  )
}

export default RegisterPage
