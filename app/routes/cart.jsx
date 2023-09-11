import styles from '~/styles/cart.css'

export const links = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export const meta () => {}

const Cart = () => {
  return (
    <main className="conainer">
        <h1 className="heading">Shopping Cart</h1>
        <div className="content">
            <div className='cart'>
                <h2>Items</h2>

            </div>
            <aside className="summary">
                <h3>Summary</h3>
                <p>Grand Total: $ </p>
            </aside>
        </div>
    </main>
  )
}

export default Cart