export async function getPosts() {
    const url = `${process.env.API_URL}/posts?populate=image`
    const answer = await fetch(url)
    const results = await answer.json()

    return results
}

export async function getPost(url) {
    const endpoint_url = `${process.env.API_URL}/posts?filters[url]=${url}&populate=image`
    const answer = await fetch(endpoint_url)
    const result = await answer.json()

    return result
}