import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { SelectBox, SelectOption } from '../components'
import Form from '../components/Form/Form'

const vendors = ['BITCOIN INC', 'NINJA BANK', 'BLOCK CHAIN INC', 'EVIL CORP']
type Vendor = 'BITCOIN INC' | 'NINJA BANK' | 'BLOCK CHAIN INC' | 'EVIL CORP'

const vendorColors: Record<Vendor, string> = {
  'BITCOIN INC': '#FFAE34', // yellow
  'NINJA BANK': '#222222', // black
  'BLOCK CHAIN INC': '#8B58F9', // purple
  'EVIL CORP': '#F33355', // red
}

// const newCard: CreditCard = {
//   cardNum: 'XXXXXXXXXXXXXXXX',
//   holderName: 'Firstname Lastname',
//   validYear: 'YY',
//   validMonth: 'MM',
//   active: false,
// }
// export function convertCreditCardToStrings(creditCard) {
//   return {
//     ...creditCard,
//     cardNum: creditCard.cardNum.toString(),
//     validYear: creditCard.validYear.toString(),
//     validMonth: creditCard.validMonth.toString(),
//   };
// };

export function AddCard() {
  // **Select vendor**
  const options: SelectOption[] = [
    { label: 'Select...', value: '' },
    ...vendors.map((vendor) => ({ label: vendor, value: vendor })),
  ]

  const [value, setValue] = useState('')
  const [cardColor, setCardColor] = useState('')

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as Vendor
    setValue(value)
    setCardColor(vendorColors[value])
  }
  // ** **

  return (
    <div className="add-card">
      <div className="add-card__title-box">
        <button className="button__go-back">
          <Link className="button__go-back-text" to="/">
            ←
          </Link>
        </button>
        <h1 className="title title__add-card">ADD A NEW BANK CARD</h1>
      </div>
      <p className="helper-text helper-text__title">NEW CARD</p>

      <div className="just-test-card" style={{ backgroundColor: cardColor }}>
        // Card content goes here
      </div>
      <p className="helper-text">VENDOR</p>
      <SelectBox
        className="add-card__vendor-select-box"
        options={options}
        value={value}
        onChange={onChange}
      />
      {value && <p>Selected value: {value}</p>}

      <p>FORM</p>
      <Form />
      <button className="button button__add-card">ADD CARD</button>
    </div>
  )
}

export default AddCard
