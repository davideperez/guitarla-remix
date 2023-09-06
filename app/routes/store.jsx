import { useLoaderData } from "@remix-run/react"
import { getGuitars } from "~/models/guitars.server"
import Guitar from "~/components/guitar"
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
      <h2 className="heading">Our Collection</h2>
      {guitars?.length && (
        <div className="guitars-grid">
          {guitars?.map(guitar => (
            <Guitar 
              key={guitar?.id}
              guitar={guitar?.attributes}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Store