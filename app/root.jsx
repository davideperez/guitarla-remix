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
                <title> Guitar LA - Remix</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}