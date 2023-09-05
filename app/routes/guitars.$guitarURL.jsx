
export async function loader({request, params}){
  const { guitarURL } = params
  console.log(guitarURL)
  return {}
}

export default function Guitar () {
  return (
    <div>$guitarurl</div>
  )
}
