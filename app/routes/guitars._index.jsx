import { useLoaderData } from "@remix-run/react"
import { getGuitars } from "~/models/guitars.server"
import GuitarsList from "~/components/guitars-list"

export function meta() {
  return [
    {title:'Guitar LA | Guitar Store'},
    {description:'Guitar LA | Our Guitars Collection.'},
  ]
}

export async function loader () {
  const guitars = await getGuitars()

  return guitars.data
}

const Store = () => {
  const guitars = useLoaderData()

  return (
      <GuitarsList 
        guitars={guitars}
      />
  )
}

export default Store