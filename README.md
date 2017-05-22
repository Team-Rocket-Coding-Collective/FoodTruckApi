Food Truck API
========================

# Development
`npm start`


I cloned this boilerplate:
https://github.com/callstack-io/hapi-graphql-boilerplate
and I'm stripping out mongodb out and replacing it with postgres

Probably give this a read: https://github.com/callstack-io/hapi-graphql-boilerplate

Example query using graphql:
`
http://127.0.0.1:1337/v1/api/graphiql?query=mutation%20%7B%0A%20%20createUser(email%3A%20%22fsaffa%22)%7B%0A%20%20%20%20id%2C%0A%20%20%20%20email%0A%20%20%7D%0A%7D&operationName=undefined
`