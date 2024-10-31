import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  LegacyRef,
  useState,
} from 'react'
import { Box, Field, InputContainer } from './styles'
import inputMask, { MaskTypes } from '../../../../utils/inputMask'
import { FieldError } from 'react-hook-form'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  type: string
  width: string
  display?: string
  placeholder: string
  optional?: boolean
  maskType?: MaskTypes
  error?: FieldError
}

export const Input = forwardRef(function Input(
  {
    id,
    type,
    width,
    display,
    placeholder,
    optional,
    maskType,
    onChange,
    error,
    ...rest
  }: InputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  const [hiddenOptional, setHiddenOptional] = useState(!optional)

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value === '') {
      setHiddenOptional(false)
    } else {
      setHiddenOptional(true)
    }

    if (maskType) {
      const mask = inputMask[maskType]
      event.currentTarget.value = mask(event)
    }

    onChange?.(event)
  }

  return (
    <Box>
      <InputContainer>
        <Field
          id={id}
          type={type}
          placeholder={placeholder}
          width={width}
          display={display}
          ref={ref}
          onChange={handleOnChange}
          {...rest}
        />
        {optional && <span hidden={hiddenOptional}>Opcional</span>}
      </InputContainer>
      {error?.message && <p>{error.message}</p>}
    </Box>
  )
})
