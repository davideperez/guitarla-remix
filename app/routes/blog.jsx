import { useLoaderData } from "@remix-run/react"
import { getPosts } from "~/models/posts.server"
import Post from "~/components/post"
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
    <div className="container">
      <h2 className="heading">Blog</h2>
      <div className="blog">
            {posts?.map( post => (
              <Post 
                key={post.id}
                post={post?.attributes}
              />
            ))}
      </div>

    </div>
  )
}

export default Blog