import { getGuitars } from "../models/guitars.server"

export async function loader () {
  const guitars = await getGuitars()

  return guitars
}


const Store = () => {
  return (
    <div>Store</div>
  )
}

export default Store