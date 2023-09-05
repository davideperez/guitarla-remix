export async function loader () {
  
  const url = `${process.env.API_URL}/guitars?populate=image`
  const answer = await fetch(url)
  const result = await answer.json()

  console.log(`
    🪵\n
    The url: ${url} \n
    Fetched: \n
    ${result}
    🪵\n
  `)

  return result
}


const Store = () => {
  return (
    <div>Store</div>
  )
}

export default Store