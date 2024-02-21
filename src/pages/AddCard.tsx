import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { SelectBox, SelectOption } from '../components'
import Form from '../components/Form/Form'

// Vendor names
const vendors = ['BITCOIN INC', 'NINJA BANK', 'BLOCK CHAIN INC', 'EVIL CORP']

// Type definition for 'Vendor' 
type Vendor = 'BITCOIN INC' | 'NINJA BANK' | 'BLOCK CHAIN INC' | 'EVIL CORP'

// The keys=(vendor names) and their objects with properties for -> card background color | vendor logo
const vendorColors: Record<Vendor, {color: string, logo: string}> = {
  'BITCOIN INC': {
    color: '#FFAE34',
    logo: `/logo/bitcoin.svg`,
  },
  'NINJA BANK': {
    color: '#222222',
    logo: `/logo/ninja.svg`,
  },
  'BLOCK CHAIN INC': {
    color: '#8B58F9',
    logo: `/logo/chain.svg`,
  },
  'EVIL CORP': {
    color: '#F33355',
    logo: `/logo/evil.svg`,
  },
}

// Drop-down menu function to choose vendor
export function AddCard() {
  const options: SelectOption[] = [
    { label: 'Select...', value: '', disabled: true },
    ...vendors.map((vendor) => ({ label: vendor, value: vendor })),
  ]

  // States for -> value from drop-down menu | properties from chosen vendor
  const [value, setValue] = useState('')
  const [cardInfo, setCardInfo] = useState({color: '', logo: ''});

  // Function runs when user selects a vendor from drop-down menu. -> Updates both selected value | the card info=(vendor properties)
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as Vendor
    setValue(value)
    setCardInfo(vendorColors[value])
  }

  return (
    <div className="add-card">
      <div className="add-card__title-box">

        {/* Arrow-button 'go back' */}
        <button className="button__go-back">
          <Link className="button__go-back-text" to="/">
            ←
          </Link>
        </button>

        {/* Title */}
        <h1 className="title title__add-card">ADD A NEW BANK CARD</h1>
      </div>

      {/* New card */}
      <p className="helper-text helper-text__title">NEW CARD</p>
      <div className="just-test-card" style={{ backgroundColor: cardInfo ? cardInfo.color : '#D0D0D0' }}>

        {/* New card -- card logo */}
        <div className="card__top__logo">
          {value && value !== 'select...' && <img src={cardInfo.logo} alt="Vendor logo" />}
        </div>

          // Card content goes here
      </div>

      {/* Input for info */}
      <Form />

      {/* Select drop-down menu */}
      <p className="helper-text">VENDOR</p>
      <SelectBox
        className="add-card__vendor-select-box"
        options={options}
        value={value}
        onChange={onChange}
      />

      {/* 'Add card' button */}
      <button className="button button__add-card">ADD CARD</button>
    </div>
  )
}

export default AddCard
