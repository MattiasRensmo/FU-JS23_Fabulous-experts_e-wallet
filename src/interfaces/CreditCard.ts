interface CreditCard {
  cardNum: string | undefined
  holderName: string | undefined
  validYear: string | undefined
  validMonth: string | undefined
  cvc: string | undefined
  vendor: 'bitcoin' | 'chain' | 'evil' | 'ninja' | undefined
  active: boolean
}
