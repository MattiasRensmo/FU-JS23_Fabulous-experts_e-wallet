interface CreditCard {
  cardNum: number
  holderName: string
  validYear: number
  validMonth: number
  vendor: 'bitcoin' | 'chain' | 'evil' | 'ninja' | undefined
  active: boolean
}
