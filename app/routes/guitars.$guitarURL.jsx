import {
  useLoaderData,
  useRouteError,
  isRouteErrorResponse,
  Link
} from "@remix-run/react"
import { getGuitar } from "~/models/guitars.server"
import styles from "~/styles/guitars.css"

/** Error Handling */

export function ErrorBoundary () {
  const error = useRouteError()

  if(isRouteErrorResponse(error)) {
      return (
        <main>
          <p className='error'>{error.status}{error.statusText}</p>
          <Link className='error-link' to='/'>Perhaps you want go back to Home.</Link>
        </main>
      )
  }

  return (
    <main>
        <p className='error'>{error.status}{error.statusText}</p>
        <Link className='error-link' to='/'>Perhaps you want go back to Home.</Link>
    </main>
  )
}

export async function loader({request, params}){
  const { guitarURL } = params
  
  const guitar = await getGuitar(guitarURL)
  
  if(guitar.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: ' Guitar not found.',
      data: {}
    })
  }
  
  return guitar
}

export function meta ({ data }) {
  
  if(!data) {
    return [
      {title: 'Guitar LA | Guitar not found.'},
      {description:`Guitars, guitar sales, guitar not found.`},
    ]
  }

  return [
    {title:`Guitar LA | ${data.data[0].attributes.name}`},
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
