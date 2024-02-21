import { ChangeEvent, useState } from 'react'
import { SelectBox, SelectOption } from '../components'
import Form from '../components/Form/Form'

const vendors = ['BITCOIN INC', 'NINJA BANK', 'BLOCK CHAIN INC', 'EVIL CORP']

export function AddCard() {
  // **Select vendor**
  const options: SelectOption[] = [
    { label: 'Select...', value: '' },
    ...vendors.map((vendor) => ({ label: vendor, value: vendor })),
  ]

  const [value, setValue] = useState('')

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value)
  }
  // ** **

  return (
    <div className="add-card">
      <h1 className="add-card__title">ADD A NEW BANK CARD</h1>
      <p className="add-card__vendor-text">VENDOR</p>
      <SelectBox
        className="add-card__vendor-select-box"
        options={options}
        value={value}
        onChange={onChange}
      />
      {value && <p>Selected value: {value}</p>}

      <p>FORM</p>
      <Form />
    </div>
  )
}

export default AddCard
