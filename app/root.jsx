import { useState } from 'react'
import {
    Meta,
    Links,
    Outlet,
    Scripts, 
    LiveReload,
    useRouteError,
    isRouteErrorResponse,
    Link
} from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/header.jsx'
import Footer from '~/components/footer.jsx'


export function meta() {
    return (
        [
            {charset: 'utf-8'},
            {title: 'Guitar LA | Remix'},
            {viewport: "width=device-width,intial-scale=1"}
        ]
    )
}

export function links () {
    //Order matters on the following:
    return [
        {
            rel: "stylesheet",
            href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
        },
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com"
        },
        {
            rel: 'preconnect',
            href: "https://fonts.gstatic.com",
            crossOrigin: "true"
        },
        {
            rel: 'stylesheet',
            href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap"
        },
        {
            rel: "stylesheet",
            href: styles
        },
    ]
}

export default function App () {
    const [ cart, setCart ] = useState([])

    
    const addToCart = guitar => {
        
        if (cart.some(guitarOnState  => guitarOnState.id === guitar.id )) {
            //Iterate over the array and get the duplicate 
            const updatedCart = cart.map( guitarOnState => {
                if (guitarOnState.id === guitar.id) {
                    //Update amount.
                    guitarOnState.amount += guitar.amount
                }

                return guitarOnState
            
            })
            
            //Adds to the cart.
            setCart(updatedCart)

        } else {
            //Adds
            setCart([...cart, guitar])
        }
    }

    return (
        <Document>
            <Outlet 
                context={{
                    addToCart,
                    cart
                }}
            />
        </Document>
    )
}

function Document ({children}) {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

/** Error Handling */

export function ErrorBoundary () {
    const error = useRouteError()

    if(isRouteErrorResponse(error)) {
        return (
            <Document>
                <p className='error'>{error.status}{error.statusText}</p>
                <Link className='error-link' to='/'>Perhaps you want go back to Home.</Link>
            </Document>
        )
    }

    return (
        <Document>
            <p className='error'>{error.status}{error.statusText}</p>
            <Link className='error-link' to='/'>Perhaps you want go back to Home.</Link>
        </Document>
    )
}