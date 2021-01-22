const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require('mongoose');

const app = express();

// connect to mDB
mongoose.connect('mongodb+srv://Oyinloluwa:Oyinloluwa@routing.3vlsj.mongodb.net/Oyinloluwa?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
