import type { IncomeType } from "./type.js"

const IncomeComponent = ({
  salary,
  sideHustle,
  bonus
}: IncomeType) => {

  return (
    <>
      <p>{salary}</p>
      <p>{sideHustle}</p>
      <div>
        <p>{bonus?.amount}</p>
         <p>{bonus?.label}</p>
      </div>
    </>
  )
}

export default IncomeComponent;