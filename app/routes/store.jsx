import { useLoaderData } from "@remix-run/react"
import { getGuitars } from "~/models/guitars.server"
import GuitarsList from "~/components/guitars-list"
import styles from "~/styles/guitars.css"

export function meta() {
  return [
    {title:'Guitar LA | Guitar Store'},
    {description:'Guitar LA | Our Guitars Collection.'},
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles, 
    }
  ]
}

export async function loader () {
  const guitars = await getGuitars()

  return guitars.data
}

const Store = () => {
  const guitars = useLoaderData()

  return (
    <main className="container ">
      <GuitarsList 
        guitars={guitars}
      />
    </main>
  )
}

export default Store