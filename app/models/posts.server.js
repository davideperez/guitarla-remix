export async function getPosts() {
    const url = `${process.env.API_URL}/posts?populate=image`
    const answer = await fetch(url)
    const results = await answer.json()

    return results
}