const express = require("express");
const session = require('express-session')
const connectDB = require("./config/db");
const User = require("./models/user");
const app = express();

connectDB();

//const userRoutes= require("./routes/userroutes");
app.use(express.json()); //This is used in order for req.body.abc statemnets to work fine.
let cors = require("cors");
app.use(cors());
app.use(session({ secret: 'Secret_Key' }));
require("dotenv").config();

app.get('/', function(req, res) {
    res.send('Hello Sir')
})

app.get('/insert', async function(req, res) {
    let project = new User({
        name: 'nawmtye',
        email: 'emwaisl@gmail.com'
    });
    const projectId = await project.save();
    console.log(projectId)
    res.send('Hello Si2r')
})


app.listen(5002, () => {
    console.log("app is listening on port 5002");
});
