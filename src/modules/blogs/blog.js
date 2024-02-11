const express = require('express');
const app = express();
const {getData,postData,deleteData,updateData}= require('./blog.controller')

app.get('/blogs',getData)
app.post('/addblog', postData)
app.delete('/deleteblog/:id', deleteData)
app.patch('/updateblog/:id', updateData)

module.exports = app ;