import { useLoaderData } from "@remix-run/react"
import { getGuitar } from "~/models/guitars.server"
import styles from "~/styles/guitars.css"

export function meta ({data}) {
  return [
    {title:`Guitar LA - ${data.data[0].attributes.name}`},
    {description:`Guitars, guitar sales, ${data.data[0].attributes.name} guitar.`},
  ]
}

export function links () {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader({request, params}){
  const { guitarURL } = params

  const guitar = await getGuitar(guitarURL)

  return guitar
}

export default function Guitar () {
  const guitar = useLoaderData()

  const { name, description, image, price } = guitar.data[0].attributes
  
  return (
    <main className="container guitar">
      <img className='image' src={image.data.attributes.url} alt={`${name} "guitar"`} />
      <div className="content">
        <h3>{name}</h3>
        <p className="text">{description}</p>
        <p className="price">${price}</p>
      </div>
    </main>
  )
}