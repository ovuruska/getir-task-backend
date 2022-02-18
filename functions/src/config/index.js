const env = process.env.NODE_ENV || "production";

const config = require( `./environments/${ env.toLowerCase( ) }` );

module.exports = config;
