import { Link } from "@remix-run/react"
import { formatDate } from "~/utils/helpers.js"


export default function Post ({post}) {
  
    const { title, content, image, url, publishedAt } = post
    let imageURL = image.data.attributes.formats.small.url

    return (
        <article className="post">
            <img className='image' src={imageURL} alt={`blog of ${title}`} />
            <div className="content">
                <h3>{title}</h3>
                <p className="date">{formatDate(publishedAt)}</p>
                <p className="summary">{content}</p>
                <Link className="link" to={`/blog/${url}`}>Read Post</Link>
            </div>
        </article>
  )
}