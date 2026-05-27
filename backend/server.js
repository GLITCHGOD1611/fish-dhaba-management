const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Connect to MongoDB


const app = express();
const PORT = process.env.PORT || 5000;

//routers
const userRouter = require('./routes/UserRout');
const tableRouter = require('./routes/TableRout');


//middleware
app.use(cors());
app.use(express.json());
connectDB();


app.get('/',(req,res)=>
{
    res.send('Hello World!');
});


app.use('/api/users', userRouter);
app.use('/api/table', tableRouter);












app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});