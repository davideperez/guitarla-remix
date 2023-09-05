export async function getGuitars () {
    const url = `${process.env.API_URL}/guitars?populate=image`
    const answer = await fetch(url)
    const results = await answer.json()

    return results
}