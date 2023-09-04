import {
    Meta,
} from '@remix-run/react'

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

export default function App () {
    
    return (
        <Document>
            <h1>Hello World!</h1>
        </Document>
    )
}

function Document ({children}) {
    return (
        <html lang="en">
            <head>
                <Meta />
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}