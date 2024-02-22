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
  // States for -> value from drop-down menu | properties from chosen vendor
  // const [value, setValue] = useState('')
  // const [cardInfo, setCardInfo] = useState({ name: '' })
  const [cardNewInfo, setNewCardInfo] = useState<CreditCard>({
    cardNum: undefined,
    holderName: '',
    validYear: '',
    validMonth: '',
    vendor: undefined,
    cvc: '',
    active: false,
  })

  // Function runs when user selects a vendor from drop-down menu. -> Updates both selected value | the card info=(vendor properties)
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as CreditCard['vendor']
    // setValue(value)
    // setCardInfo(vendorColors[value])
    setNewCardInfo({
      ...cardNewInfo,
      vendor: value,
    })
  }

  const handleInputChange = ({ number, name, month, year, cvc }: any) => {
    console.log(number)
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
  // const [cards, setCards] = useState<CreditCard[] | undefined>(getLocalItem())
  const cards: CreditCard[] | undefined = getLocalItem()

  const handleSaveNewCard = () => {
    //TODO: Split checking to egen funktion - så vi kan kolla medan vi skriver o visa för användaren. Och kolla separat när vi klickar på knappen
    console.log(cardNewInfo)
    //cardNum ska va 16 siffror o inget annat
    if (!cardNewInfo.cardNum?.match(/\d{16}/g)) return 'wrong number of digits'

    //Kortet får inte redan finnas
    if (cards?.filter((card) => card.cardNum === cardNewInfo.cardNum).length)
      return 'Card already exists'

    //HolderName från inte vara tomt & det måste finnas ett mellanslag mellan bokstäver
    if (!cardNewInfo.holderName?.match(/\w{3}/g))
      return 'Du måste fylla i ett namn'
    //validMonth måste va två siffror (som en sträng)
    if (!cardNewInfo.validMonth?.match(/^\d\d$/g))
      return 'Du måste fylla i en månad'
    //validYeas måste va två siffror som sträng
    if (!cardNewInfo.validYear?.match(/^\d\d$/g))
      return 'Du måste fylla i ett år'
    //ccv måste va tre siffror
    if (!cardNewInfo.cvc?.match(/^\d\d\d$/g)) return 'Du måste fylla i CCV'
    //vendor ska inte vara undefined
    if (cardNewInfo.vendor === undefined) return 'Du måste välja en tillverkare'
    cards ? setLocalItem([...cards, cardNewInfo]) : setLocalItem([cardNewInfo])
    navigate('/')
    return 'allt funkade'
  }

  return (
    <div className="add-card-container">
      {/* FIXME {handleSaveNewCard()} */}
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
          className="add-card__vendor-select-box input__container"
          options={options}
          value={cardNewInfo.vendor || ''}
          onChange={onChange}
        />

        {/* 'Add card' button */}
        <button className="button button__add-card" onClick={handleSaveNewCard}>
          ADD CARD
        </button>
      </div>
    </div>
  )
}

export default AddCard
