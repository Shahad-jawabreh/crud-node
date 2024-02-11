const express = require('express');
const app = express();

const {getData,postData,deleteData,updateData}= require('./user.controller')
app.get('/users', getData )
app.post('/user/add', postData)

app.delete('/user/delete/:id', deleteData)
app.patch('/user/update/:id', updateData)

module.exports= app ;
