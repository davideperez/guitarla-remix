import { useState } from "react"
import {
  useLoaderData,
  useRouteError,
  isRouteErrorResponse,
  Link
} from "@remix-run/react"
import { getGuitar } from "~/models/guitars.server"

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

export default function Guitar () {
  const [ amount, setAmount ] = useState(0)

  const guitar = useLoaderData()
  const { name, description, image, price } = guitar.data[0].attributes
  
  return (
    <div className="guitar">
      <img className='image' src={image.data.attributes.url} alt={`${name} "guitar"`} />
      
      <div className="content">
        <h3>{name}</h3>
        <p className="text">{description}</p>
        <p className="price">${price}</p>

        <form className="form">
          <label htmlFor="amount">Amount</label>

          <select 
            onChange={ e => setAmount(+e.target.value)}
            id="amount"
          >
            <option value="">-- Select --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input 
            type="submit"
            value='Add to cart'
          />
        </form>
      </div>
    </div>
  )
}