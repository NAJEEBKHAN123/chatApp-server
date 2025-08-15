const express = require('express');
const DBconnection = require('./utils/db')
const authRoutes = require('./router/authRouter')
const messageRoutes = require('./router/messageRoutes')
const path = require('path');
const bodyParser = require("body-parser");

const cors = require('cors')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser');
const { app, server } = require('./utils/socket');
dotenv.config()


//db connection
DBconnection()

//middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}
    

));

app.use(cookieParser());
app.use(express.json({ limit: "10mb" })); // Increase payload limit
app.use(express.urlencoded({ limit: "10mb", extended: true }));

const PORT = process.env.PORT || 3000



app.get('/', (req, res) =>{
    res.send("this is home page")
})

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)

// if(process.env.NODE_ENV === "production"){
//     app.use(express.static(path.join(__dirname, "../frontend/dist")))


//     app.get("*", (req, res) =>{
//         res.sendFile(path.join(__dirname, '../frontend', "dist", "index.html"))
//     })
// }




server.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
})