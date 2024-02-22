import React, { useEffect, useState } from 'react'
import './../../interfaces/CreditCard'
import './Form.scss'

interface FormData {
  number: string
  name: string
  month: string
  year: string
  cvc: string
  active: boolean
}

interface Props {
  onInputChange: (data: FormData) => void
}

const Form = ({ onInputChange }: Props) => {
  const [formData, setFormData] = useState<FormData>({
    number: '',
    name: '',
    month: '',
    year: '',
    cvc: '',
    active: false,
  })

  useEffect(() => {
    onInputChange(formData)
  }, [formData])

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const sixteenDigits = value.replace(/\D/g, '').substring(0, 16)
    setFormData((pre) => ({ ...pre, number: sixteenDigits }))
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const noDigits = value.replace(/[^a-zåäöA-ZÅÄÖ\s]/g, '').substring(0, 30)
    setFormData((pre) => ({ ...pre, name: noDigits }))
  }

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const fourNumbers = value.replace(/\D/g, '').substring(0, 4).trim()

    setFormData((pre) => ({
      ...pre,
      month: fourNumbers.substring(0, 2),
      year: fourNumbers.substring(2),
    }))
  }

  const handleCvc = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const threeDigits = value.replace(/\D/g, '').substring(0, 3)
    setFormData((pre) => ({ ...pre, cvc: threeDigits }))
  }

  const formatNumber = () => {
    return formData.number.replace(/(.{4})/g, '$1 ').trim()
  }

  const formatExpiry = (): string => {
    if (!formData.month) return ''
    return `${formData.month}${formData.year && '/'}${formData.year}`
  }

  return (
    <div>
      <form className="form-container">
        <label>
          <span className="helper-text">CARD NUMBER</span>
          <input
            className="input__container input__container__long"
            type="text"
            name="number"
            value={formatNumber()}
            onChange={handleNumberChange}
          />
        </label>
        <label>
          <span className="helper-text">CARDHOLDER NAME</span>
          <input
            className="input__container input__container__long"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          <span className="helper-text">VALID THRU</span>
          <input
            className="input__container input__container__short"
            type="text"
            name="expiry"
            value={formatExpiry()}
            onChange={handleExpiryChange}
          />
        </label>
        <label>
          <span className="helper-text">CCV</span>
          <input
            className="input__container input__container__short"
            type="text"
            name="cvc"
            value={formData.cvc}
            onChange={handleCvc}
          />
        </label>
      </form>
    </div>
  )
}

export default Form
