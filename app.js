const express = require('express');

const mongoose = require('mongoose');

const url = 'mongodb://localhost/neodbx';
const uric = "mongodb+srv://svmane7171:SYuBWf1X0Ux6tmpI@cluster0.ogupfhz.mongodb.net/test?retryWrites=true&w=majority"
const app = express();

mongoose.connect(uric,{useNewUrlParser:true});

const con = mongoose.connection;

con.on('open',()=>{
    console.log('connected...');
})

app.use(express.json());
var cors = require('cors');
app.use(cors());
const alienRouter =  require('./routers/aliens');
app.use('/aliens',alienRouter);
// 
const userRouter =  require('./routers/users');
app.use('/users',userRouter);

app.listen(9000,()=>{
    console.log('Server Started');
})