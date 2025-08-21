require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const {connectToMongoDB} = require('./connect')
const appRouter = require('./router/appRouter')

const app = express();
const cors = require('cors');


// mongo db connexction
connectToMongoDB("mongodb://127.0.0.1:27017/student-aggregator-database")
.then(()=>console.log("mongoDb connected")
)

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
     origin: 'http://localhost:5173',
     credentials: true
 }));


//routing
app.use('/api',appRouter);




const PORT = 3005;
app.listen(PORT,()=>{
    console.log(`server run on http://localhost:${PORT}`);
})