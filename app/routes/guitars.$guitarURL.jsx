import { useLoaderData } from "@remix-run/react"
import { getGuitar } from "../models/guitars.server"


export async function loader({request, params}){
  const { guitarURL } = params

  const guitar = await getGuitar(guitarURL)

  return guitar
}

export default function Guitar () {
  const guitar = useLoaderData()
  
  console.log(guitar.data[0].attributes.name)
  
  return (
    <div>$guitarurl</div>
  )
}
