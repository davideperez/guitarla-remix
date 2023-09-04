import {
    Meta,
    Links,
    Outlet

} from '@remix-run/react'

import styles from './styles/index.css'


export function meta() {
    return (
        [
            {
                charset: 'utf-8',
                title: 'Guitar LA - Remix',
                viewport: "width=device-width,intial-scale=1"
            }
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
    
    return (
        <Document>
            <Outlet />
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
                {children}
            </body>
        </html>
    )
}