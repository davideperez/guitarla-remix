import { Link } from "@remix-run/react"

export default function Post ({post}) {
  
    const { title, content, image, url, publishedAt } = post
    let imageURL = image.data.attributes.formats.small.url

    return (
        <article className="post">
            <img className='image' src={imageURL} alt={`blog of ${title}`} />
            <div className="content">
                <h3>{title}</h3>
                <p className="date">{publishedAt}</p>
                <p className="summary">{content}</p>
                <Link className="link" to={`/post/${url}`}>Read Post</Link>
            </div>
            
        </article>
  )
}