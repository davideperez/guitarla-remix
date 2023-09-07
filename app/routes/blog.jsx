import { useLoaderData } from "@remix-run/react"
import { getPosts } from "~/models/posts.server"
import PostsList from "~/components/posts-list"
import styles from "~/styles/blog.css"

export function links () {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export function meta () {
  return [
    {title:'Guitar LA | Our Blog'},
    {description:'Guitar LA, Blog of music and guitar sale.'},
  ]
}

export async function loader() {
  const posts = await getPosts()
  return posts.data
}

const Blog = () => {

  const posts = useLoaderData()

  return (
    <main className="container">
        <PostsList 
          posts={posts}
        />
    </main>
  )
}

export default Blog