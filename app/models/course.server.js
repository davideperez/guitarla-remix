export async function getCourse() {
    const url = `${process.env.API_URL}/course?populate=image`
    const answer = await fetch(url)
    const result = await answer.json()

    return result
}