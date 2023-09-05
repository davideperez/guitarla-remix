export async function getGuitars () {
    const url = `${process.env.API_URL}/guitars?populate=image`
    const answer = await fetch(url)
    const results = await answer.json()

    return results
}

export async function getGuitar(url) {
    const endpoint_url = `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
    const answer = await fetch(endpoint_url)
    const result = await answer.json()
    console.log(result)

    return result
}