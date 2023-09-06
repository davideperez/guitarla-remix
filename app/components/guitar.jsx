import { Link } from "@remix-run/react"

export default function Guitar ({guitar}) {

  const { name, description, image, price, url } = guitar

  let imageURL = image.data.attributes.formats.medium.url
  return (
    <div className="guitar">
      <img src={imageURL} alt={`${name} guitar`} />
      <div className="content">
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className="price ">${price}</p>
        <Link className="link" to={`/guitars/${url}`}>Product Details</Link>
      </div>
    </div>
  )
}
