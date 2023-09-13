import { useEffect, useState } from 'react'
import { useOutletContext } from '@remix-run/react'
import styles from '~/styles/cart.css'

export const links = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export const meta = () => {
    return [
        {title: 'Guitar LA - Shopping Cart'},
        {description: 'Guitar sales, music, blog, shopping cart, store,'}
    ]
}

const Cart = () => {
    
    const [ total, setTotal ] = useState(0)
    const { cart, updateAmount } = useOutletContext()

    useEffect(() => {
        const totalCalculation = cart.reduce( (total, product) => total + (product.price * product.amount), 0)
        setTotal(totalCalculation)
    }, [cart])

  return (
    <main className="conainer">
        <h1 className="heading">Shopping Cart</h1>
        <div className="content">
            <div className='cart'>
                <h2>Items</h2>
                {cart.lenght === 0 ? 'Cart is empty.' : (
                    cart.map( product => (
                        <div key={product.id} className='product'>
                            <div>
                                <img src={product.image} alt={`The ${product.name} guitar.`} />
                            </div>
                            <div>
                                <p className='name'>{product.name}</p>
                                <p className='amount'>Amount:</p>
                                <select 
                                    value={product.amount}
                                    className='select'
                                    onChange={ e => updateAmount({
                                        amount: +e.target.value,
                                        id: product.id
                                    })}
                                >
                                    <option value="0">-- Select --</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>

                                <p className='price'>$ <span>{product.price}</span></p>
                                <p className='subtotal'>Subtotal $ <span>{product.price * product.amount}</span></p>
                            </div>
                        </div>
                    ))
                )

                }
            </div>
            <aside className="summary">
                <h3>Summary</h3>
                <p>Grand Total: ${total} </p>
            </aside>
        </div>
    </main>
  )
}

export default Cart