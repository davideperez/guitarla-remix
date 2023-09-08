import { useLoaderData } from "@remix-run/react"
import { getGuitars } from "~/models/guitars.server"
import { getPosts } from "~/models/posts.server"
import { getCourse } from "../models/course.server"
import GuitarsList from "~/components/guitars-list"
import PostsList from "~/components/posts-list"
import Course from "~/components/course"
import guitarsStyles from "~/styles/guitars.css"
import postsStyles from "~/styles/blog.css"
import courseStyles from "~/styles/course.css"



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
    },
    {
      rel: 'stylesheet',
      href: courseStyles
    }
  ]
}

export async function loader () {

  const [guitars, posts, course] = await Promise.all([
    getGuitars(),
    getPosts(),
    getCourse()
  ])

  const data = {
    guitars: guitars.data,
    posts: posts.data,
    course: course.data
  }

  return data
}

function Index () {

  const data = useLoaderData()
  const { guitars, posts, course } = data

  return (
    <>
      <main className="container">
        <GuitarsList 
          guitars={guitars}
        />
      </main>
      <Course 
        course={course.attributes}
      />
      <section className="container">
        <PostsList 
          posts={posts}
        />
      </section>
    </>
    )
}

export default Index