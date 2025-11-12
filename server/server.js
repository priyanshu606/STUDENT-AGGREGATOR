require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const {connectToMongoDB} = require('./connect')
const appRouter = require('./router/appRouter')
const blogRouter = require('./router/blogRouter')
const commentRouter = require('./router/commentRouter')
const applicationRouter = require('./router/applicationRoutes')
const internshipRouter  = require('./router/internshipRoutes')
const hackathonRouter = require('./router/hackathonRoutes')
const hackathonApplicationRouter = require('./router/hackathonApplication');
const scholarshipRouter = require('./router/scholarshipRoutes');
const scholarshipApplicationRouter = require('./router/scholarshipApplication');
const techEventsRouter = require('./router/techEventRoutes');
const techEventApplicationRouter = require('./router/techEventApplication');
const contestRouter = require('./router/contestRoutes');
const contestApplicationRouter  = require('./router/contestApplicationRoutes');
const studentDashboardRouter = require('./router/studentDashboardRoutes');
const app = express();
const cors = require('cors');


// mongo db connexction
connectToMongoDB("mongodb://127.0.0.1:27017/student-aggregator-database")
.then(()=>console.log("mongoDb connected")
)

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
     origin: 'http://localhost:5173',
     credentials: true
 }));


//routing
app.use('/api',appRouter);
app.use('/api',blogRouter);
app.use('/api',commentRouter);
app.use('/api',applicationRouter);
app.use('/api',internshipRouter)
app.use('/api',hackathonRouter)
app.use('/api',hackathonApplicationRouter)
app.use('/api',scholarshipRouter)
app.use('/api',scholarshipApplicationRouter)
app.use('/api',techEventsRouter);
app.use('/api',techEventApplicationRouter);
app.use('/api',contestRouter);
app.use('/api',contestApplicationRouter);
app.use('/api',studentDashboardRouter);
const PORT = 3005;
app.listen(PORT,()=>{
    console.log(`server run on http://localhost:${PORT}`);
})