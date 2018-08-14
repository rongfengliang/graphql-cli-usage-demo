const fetch = require('node-fetch')
const { HttpLink } = require('apollo-link-http')
const { makeRemoteExecutableSchema } = require('graphql-tools')
const {importSchema}  = require("graphql-import")
const typeDefs = importSchema("./schema.graphql")
// Create the `HttpLink` required for the remote executable schema
const endpoint = "http://localhost:4466"
const link = new HttpLink({ uri: endpoint, fetch })

// Create the remote schema
const schema = makeRemoteExecutableSchema({ link, schema: typeDefs })

module.exports = schema