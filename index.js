const express = require('express');
const app = express();
const users = require('./src/modules/users/user')
const blogs = require('./src/modules/blogs/blog')

app.use(express.json())

app.use(users)
app.use(blogs)

app.listen(3000,() => {
    console.log('listening on 3000');
});