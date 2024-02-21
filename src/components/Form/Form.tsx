import React, { useState } from 'react'

import './Form.scss'

interface CreditCard {
  cardNum: number
  holderName: string
  validYear: number
  validMonth: number
  vendor: 'bitcoin' | 'chain' | 'evil' | 'ninja' | undefined
  active: boolean
}

interface FormData {
  number: string
  name: string
  expiry: string
  cvc: string
  vendor: 'bitcoin' | 'chain' | 'evil' | 'ninja' | ''
  active: boolean
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    vendor: '',
    active: true,
  })

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement | HTMLSelectElement
    let formattedValue = value
    if (name === 'number') {
      formattedValue = formattedValue.replace(/\D/g, '').substring(0, 16)
      formattedValue = formattedValue.replace(/(.{4})/g, '$1 ').trim()
    } else if (name === 'name') {
      formattedValue = formattedValue
        .replace(/[^a-zA-Z\s]/g, '')
        .substring(0, 25)
    } else if (name === 'expiry') {
      formattedValue = formattedValue.replace(/\D/g, '').substring(0, 4)
      if (formattedValue.length > 2) {
        formattedValue = `${formattedValue.substring(
          0,
          2
        )} / ${formattedValue.substring(2)}`
      }
    } else if (name === 'cvc') {
      formattedValue = formattedValue.replace(/\D/g, '').substring(0, 3)
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: formattedValue,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const [month, year] = formData.expiry.split('/').map(Number)
    const creditCardData: CreditCard = {
      cardNum: parseInt(formData.number.replace(/\s+/g, ''), 10),
      holderName: formData.name,
      validMonth: month,
      validYear: year,
      vendor: formData.vendor as 'bitcoin' | 'chain' | 'evil' | 'ninja',
      active: formData.active,
    }

    console.log(creditCardData)
  }
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>
        <span>Card Number:</span>
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <span>Name:</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <span>Expiry (MM/YYYY):</span>
        <input
          type="text"
          name="expiry"
          value={formData.expiry}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <span>CVC:</span>
        <input
          type="text"
          name="cvc"
          value={formData.cvc}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <span>Vendor:</span>
        <select
          name="vendor"
          value={formData.vendor}
          onChange={handleInputChange}>
          <option value="">Select Vendor</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="chain">Chain</option>
          <option value="evil">Evil</option>
          <option value="ninja">Ninja</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
export default Form
