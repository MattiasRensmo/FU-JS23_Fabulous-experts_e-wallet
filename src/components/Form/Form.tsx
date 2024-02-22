import React, { useEffect, useState } from 'react'
import './../../interfaces/CreditCard'
import './Form.scss'

// interface CreditCard {
//   cardNum: number;
//   holderName: string;
//   validYear: number;
//   validMonth: number;
//   vendor: 'bitcoin' | 'chain' | 'evil' | 'ninja' | undefined;
//   active: boolean;
// }

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

  // const [submittedData, setSubmittedData] = useState<CreditCard | null>(null)

  // const handleInputChange = (
  //   e:
  //     | React.ChangeEvent<HTMLInputElement>
  //     | React.ChangeEvent<HTMLSelectElement>
  // ) => {
  //   const { name, value } = e.target as HTMLInputElement | HTMLSelectElement
  //   let formattedValue = value

  //   if (name === 'number') {
  //     // formattedValue = formattedValue.replace(/\D/g, '').substring(0, 16)
  //     // formattedValue = formattedValue.replace(/(.{4})/g, '$1 ').trim()
  //   } else if (name === 'name') {
  //     // formattedValue = formattedValue
  //     //   .replace(/[^a-zA-Z\s]/g, '')
  //     //   .substring(0, 30)
  //   } else if (name === 'expiry') {
  //     // formattedValue = formattedValue.replace(/\D/g, '').substring(0, 4)
  //     // if (formattedValue.length > 2) {
  //     //   formattedValue = `${formattedValue.substring(
  //     //     0,
  //     //     2
  //     //   )} / ${formattedValue.substring(2)}`
  //     // }
  //   } else if (name === 'cvc') {
  //     formattedValue = formattedValue.replace(/\D/g, '').substring(0, 3)
  //   }
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: formattedValue,
  //   }))
  // }

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   const [month, year] = formData.expiry.split('/').map(Number)
  //   const creditCardData: CreditCard = {
  //     cardNum: parseInt(formData.number.replace(/\s+/g, ''), 10),
  //     holderName: formData.name,
  //     validMonth: month,
  //     validYear: year,
  //     vendor: formData.vendor as 'bitcoin' | 'chain' | 'evil' | 'ninja',
  //     active: formData.active,
  //   }

  //   setSubmittedData(creditCardData)
  // }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const sixteenDigits = value.replace(/\D/g, '').substring(0, 16)
    setFormData((pre) => ({ ...pre, number: sixteenDigits }))
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const noDigits = value.replace(/[^a-zåäöA-ZÅÄÖ\s]/g, '').substring(0, 30)
    //FIXME: Bara ett mellanslag o formatering med ett bidesstreck
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
      {/*       {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Information:</h2>
          <p>Card Number: {submittedData.cardNum}</p>
          <p>Holder Name: {submittedData.holderName}</p>
          <p>
            Expiration Date: {submittedData.validMonth}/
            {submittedData.validYear}
          </p>
          <p>Vendor: {submittedData.vendor}</p>
          <p>Active: {submittedData.active ? 'Yes' : 'No'}</p>
        </div>
      )} */}
      <form className="form-container">
        <label>
          <span>Card Number</span>
          <input
            type="text"
            name="number"
            value={formatNumber()}
            onChange={handleNumberChange}
          />
        </label>
        <label>
          <span>Cardholder Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          <span>Valid Thru</span>
          <input
            type="text"
            name="expiry"
            value={formatExpiry()}
            onChange={handleExpiryChange}
          />
        </label>
        <label>
          <span>CCV</span>
          <input
            type="text"
            name="cvc"
            value={formData.cvc}
            onChange={handleCvc}
          />
        </label>
        {/* <label>
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
        <button type="submit">Submit</button> */}
      </form>
    </div>
  )
}

export default Form
