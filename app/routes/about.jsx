import image from '../../public/img/nosotros.jpg'
import styles from '~/styles/about.css'

export function meta () {
  return [
      {title:'Guitar LA - About'},
      {description: 'Guitars shop, music blog.'}
    ]
}

export function links () {
  return [
    {
      rel:'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: image,
      as: 'image'
    }
  ]
}

const About = () => {
  return (
    <main className="contenedor about">
      <h2 className="heading">About us</h2>
      <div className="content">
        <img src={image} alt="about us"/>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis mattis lectus scelerisque egestas. Sed in tellus iaculis mi pharetra suscipit. Suspendisse erat eros, ultricies a maximus vel, aliquet vitae diam. Phasellus nec laoreet erat, a porta nisi. Phasellus mattis mi et augue aliquet, quis fermentum nibh tincidunt. Quisque mattis tincidunt suscipit. Aliquam et ex et leo rutrum porta. Curabitur ac nibh lacinia, pretium ex facilisis, molestie tortor. Etiam lacinia porttitor metus id ultricies. Curabitur bibendum est sit amet maximus faucibus.</p>

          <p>Nullam dolor mauris, fringilla vel viverra feugiat, viverra sed ipsum. Praesent malesuada vestibulum imperdiet. Nam vitae nunc sed ex commodo facilisis eget sit amet ex. Sed turpis eros, tempus vulputate velit non, vulputate hendrerit augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur varius nulla sit amet sollicitudin. Sed accumsan porta iaculis.</p>
        </div>
      </div>
    </main>
  )
}

export default About