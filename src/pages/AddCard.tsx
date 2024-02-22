import { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SelectBox, SelectOption } from '../components'
import { Card } from '../components/Card/Card'
import Form from '../components/Form/Form'
import { useLocalStorage } from '../hooks/useLocalStorage'

// Vendor names
const vendors = [
  { label: 'BITCOIN INC', name: 'bitcoin' },
  { label: 'NINJA BANK', name: 'ninja' },
  { label: 'BLOCK CHAIN INC', name: 'chain' },
  { label: 'EVIL CORP', name: 'evil' },
]

// Drop-down menu function to choose vendor
export function AddCard() {
  const options: SelectOption[] = [
    { label: 'Select...', value: '', disabled: true },
    ...vendors.map((vendor) => ({ label: vendor.label, value: vendor.name })),
  ]
  const navigate = useNavigate()

  const [cardNewInfo, setNewCardInfo] = useState<CreditCard>({
    cardNum: undefined,
    holderName: '',
    validYear: '',
    validMonth: '',
    vendor: undefined,
    cvc: '',
    active: false,
  })

  // Function runs when user selects a vendor from drop-down menu
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as CreditCard['vendor']
    setNewCardInfo({
      ...cardNewInfo,
      vendor: value,
    })
  }

  const handleInputChange = ({ number, name, month, year, cvc }: any) => {
    setFormError('')
    setNewCardInfo({
      ...cardNewInfo,
      cardNum: number,
      holderName: name,
      cvc,
      validMonth: month,
      validYear: year,
    })
  }

  const { setLocalItem, getLocalItem } = useLocalStorage('cards')

  const cards: CreditCard[] | undefined = getLocalItem()

  const [formError, setFormError] = useState('')

  const handleSaveNewCard = () => {
    //cardNum ska va 16 siffror o inget annat
    if (!cardNewInfo.cardNum?.match(/\d{16}/g))
      return setFormError('Wrong number of digits')

    //Kortet får inte redan finnas
    if (cards?.filter((card) => card.cardNum === cardNewInfo.cardNum).length)
      return setFormError('Card already exists')

    //HolderName från inte vara tomt & det måste finnas ett mellanslag mellan bokstäver
    if (!cardNewInfo.holderName?.match(/\w{3}/g))
      return setFormError('You need to fill in your name')

    //validMonth måste va två siffror (som en sträng)
    if (!cardNewInfo.validMonth?.match(/^\d\d$/g))
      return setFormError('You need to fill in a valid month')

    //validYeas måste va två siffror som sträng
    if (!cardNewInfo.validYear?.match(/^\d\d$/g))
      return setFormError('You need to fill in a valid year')

    //ccv måste va tre siffror
    if (!cardNewInfo.cvc?.match(/^\d\d\d$/g))
      return setFormError('You need to fill in CCV')

    //vendor ska inte vara undefined
    if (cardNewInfo.vendor === undefined)
      return setFormError('You need to chose a card vendor')

    //NO errors
    cards ? setLocalItem([...cards, cardNewInfo]) : setLocalItem([cardNewInfo])
    navigate('/')
    return 'allt funkade'
  }

  return (
    <div className="add-card__container">
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
        <Card cardInfo={cardNewInfo} />

        {/* Input for info */}
        <Form onInputChange={handleInputChange} />

        {/* Select drop-down menu */}
        <p className="helper-text helper-text__vendor">VENDOR</p>
        <SelectBox
          className="add-card__vendor-select-box "
          options={options}
          value={cardNewInfo.vendor || ''}
          onChange={onChange}
        />

        {/* 'Add card' button */}
        <p
          className="helper-text"
          style={{ margin: '1rem 0 -1rem', color: 'red' }}>
          {formError}
        </p>
        <button className="button button__add-card" onClick={handleSaveNewCard}>
          ADD CARD
        </button>
      </div>
    </div>
  )
}

export default AddCard
