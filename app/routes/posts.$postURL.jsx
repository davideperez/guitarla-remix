import {
    useLoaderData,
    useRouteError,
    isRouteErrorResponse,
    Link
  } from "@remix-run/react"
  import { getPost } from "~/models/posts.server"
  import styles from "~/styles/blog.css"
  
  /** Error Handling */
  
  export function ErrorBoundary () {
    const error = useRouteError()
  
    if(isRouteErrorResponse(error)) {
        return (
          <main>
            <p className='error'>{error.status}{error.statusText}</p>
            <Link className='error-link' to='/'>Perhaps you want go back to Home.</Link>
          </main>
        )
    }
  
    return (
      <main>
          <p className='error'>{error.status}{error.statusText}</p>
          <Link className='error-link' to='/'>Perhaps you want go back to Home.</Link>
      </main>
    )
  }
  
  export async function loader({request, params}){
    const { postURL } = params
    console.log(`-------------- 1 post URL: ${postURL}`)
    const post = await getPost(postURL)
    console.log(`-------------- 2 post: ${post}`)
    console.log(`-------------- 2 post: ${JSON.stringify(post)}`)

    
    if(post.data.length === 0) {
      throw new Response('', {
        status: 404,
        statusText: ' Post not found.',
        data: {}
      })
    }
    
    return post
  }
  
  export function meta ({ data }) {
    
    if(!data) {
      return [
        {title: 'Guitar LA - Post not found.'},
        {description:`Guitars, guitar blog, post not found.`},
      ]
    }
  
    return [
      {title:`Guitar LA - ${data.data[0].attributes.title}`},
      {description:`Guitars, guitar blog, ${data.data[0].attributes.title} guitar.`},
    ]
  }
  
  export function links () {
    return [
      {
        rel: 'stylesheet',
        href: styles
      }
    ]
  }
  
  
  export default function Post () {
    const post = useLoaderData()
  
    const { title, content, image } = post.data[0].attributes
    
    return (
      <main className="container post">
        <img className='image' src={image.data.attributes.url} alt={`${title} "post"`} />
        <div className="content">
          <h3>{title}</h3>
          <p className="text">{content}</p>
        </div>
      </main>
    )
  }
  