import { FunctionComponent, useState } from 'react'
import { Input } from '../Input'
import { PasswordExtension } from './components'
import { TInputPasswordProps } from './InputPassword.d'

export const InputPassword: FunctionComponent<
  TInputPasswordProps
> = ({ ...props }): JSX.Element => {
  const [type, setType] = useState<'text' | 'password'>('password')
  const changeType = () => {
    if (type === 'password') {
      setType('text')
      return
    }
    setType('password')
  }
  return (
    <>
      <Input
        endComponent={
          <PasswordExtension type={type} onClick={changeType} />
        }
        type={type}
        {...props}
      />
    </>
  )
}
