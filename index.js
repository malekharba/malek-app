const express = require('express')
const mongoose = require('mongoose')
const app =express('mongoose')
//routes
app.get('/', (req,res)=>{
    res.send('Hello NODE API')
})
app.get('/blog',(req,res)=>{
    res.send('Hello Blog My name is Malek')
})

mongoose.
connect('mongodb+srv://malekharbaoui:wQqK9ybkzet7yHf4@malekapi.gs03pwa.mongodb.net/MalekAPI?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to MongoDB')
    app.listen(3000, ()=>{
        console.log('NODE API app is running on port 3000')
    }) 
  
}).catch((error)=>{
        console.log(error)
    })