import { useLoaderData } from "@remix-run/react"
import { getGuitars } from "~/models/guitars.server"
import { getPosts } from "~/models/posts.server"
import GuitarsList from "~/components/guitars-list"
import PostsList from "~/components/posts-list"
import guitarsStyles from "~/styles/guitars.css"
import postsStyles from "~/styles/blog.css"

export function meta () {

}

export function links () {
  return [
    {
      rel: 'stylesheet',
      href: guitarsStyles
    },
    {
      rel: 'stylesheet',
      href: postsStyles
    }
  ]
}

export async function loader () {

  const [guitars, posts] = await Promise.all([
    getGuitars(),
    getPosts()
  ])

  const data = {
    guitars: guitars.data,
    posts: posts.data
  }

  return data
}

function Index () {

  const data = useLoaderData()
  const { guitars, posts } = data
  console.log(guitars)

  return (
    <>
      <main className="container">
        <GuitarsList 
          guitars={guitars}
        />
      </main>
      <section className="container">
        <PostsList 
          posts={posts}
        />
      </section>
    </>
    )
}

export default Index