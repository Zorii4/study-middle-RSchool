type DiscountTypes = {
  price: number
  discount: number
  isInstallment: boolean
  months: number
}

const totalPrice = ({
  price,
  discount,
  isInstallment,
  months,
}: DiscountTypes): number => {
  if (isInstallment) {
    return (price - (price * discount) / 100) / months
  }
  return price - (price * discount) / 100
}

console.log(
  totalPrice({ price: 240000, discount: 30, isInstallment: true, months: 24 })
)
