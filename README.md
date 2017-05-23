Food Truck API
========================

# Development
`npm start`


I cloned this boilerplate:
https://github.com/callstack-io/hapi-graphql-boilerplate
and I'm stripping out mongodb out and replacing it with postgres

Probably give this a read: https://blog.callstack.io/super-simple-graphql-server-with-hapi-js-mongodb-and-a-new-apollo-server-41418ded2faf

Example query using graphql:
http://127.0.0.1:1337/v1/api/graphiql?query=mutation%20%7B%0A%20%20createUser(email%3A%20%22fsaffa%22)%7B%0A%20%20%20%20id%2C%0A%20%20%20%20email%0A%20%20%7D%0A%7D&operationName=undefined
