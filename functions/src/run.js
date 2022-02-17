const config = require( "./config" )
const port = config.port

const app = require("./app")

app.listen( port, ( ) => {
    console.info( `Listening on port ${ port }` )
} );